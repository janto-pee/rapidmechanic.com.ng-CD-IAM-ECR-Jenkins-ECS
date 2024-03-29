import express, { Request, Response } from "express";
import {
  createSession,
  findSession,
  findSessionById,
} from "../service/session.service";
import { findUserByEmail, findUserById } from "../service/user.service";
import { signJwt, verifyJwt } from "../utils/jwt";
import { get, omit } from "lodash";
import { CreateSessionInput } from "../schema/session.schema";

export async function createSessionHandler(
  req: Request<{}, {}, CreateSessionInput>,
  res: Response
) {
  const { email, password } = req.body;
  const userAgent = req.get("userAgent");
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(400).send(`email or password incorrect`);
    }
    if (!user.verified) {
      return res.status(400).send(`user not verified`);
    }

    const isValid = await user.comparePassword(password);
    if (!isValid) {
      return res.status(400).send(`email or password incorrect`);
    }

    // const body
    const session = await createSession({
      user: user._id,
      useragent: userAgent,
    });

    const payload = omit(user.toJSON(), user.password);

    console.log("payload from db", payload);
    const accessToken = signJwt(payload, "aTPrK", { expiresIn: "1h" });

    const refreshToken = signJwt({ session: session._id }, "rTPrK", {
      expiresIn: "1y",
    });

    const response = { accessToken, refreshToken };
    res.status(200).json({ data: response });
  } catch (error: any) {
    return res.status(400).send(error);
  }
}

export async function findSessionHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;
  console.log(res.locals.user);
  try {
    const session = await findSession({ user: userId, valid: true });
    res.status(200).json({ data: session });
  } catch (error) {
    return res.status(400).send(error);
  }
}

export async function refreshAccessTokenHandler(req: Request, res: Response) {
  const refreshToken: any = get(req, "headers.x-refresh");

  const userAgent = req.get("userAgent");

  const decoded = verifyJwt<{ session: string }>(refreshToken, "rTPK");

  if (!decoded) {
    return res.status(401).send("Could not refresh access token 1");
  }

  const session = await findSessionById(decoded.session);
  console.log(decoded, session);

  if (!session || !session.valid) {
    return res.status(401).send("Could not refresh access token 2");
  }

  const user = await findUserById(String(session.user));

  if (!user) {
    return res.status(401).send("Could not refresh access token 3");
  }

  const newsession = await createSession({
    user: user._id,
    useragent: userAgent,
  });

  const accessToken = signJwt({ ...newsession }, "aTPrK", { expiresIn: "1h" });

  return res.send({ accessToken });
}
