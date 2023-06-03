import express, { Request, Response } from "express";
import {
  createVehicle,
  deleteVehicle,
  findVehicle,
  findVehicles,
  updateVehicles,
} from "../service/vehicle.service";
import { omit } from "lodash";
import { updateUser, userVehicle } from "../service/user.service";
// import { createVehicleSchema } from "../schema/vehicle.schema";

export async function createVehicleHandler(
  req: Request,
  res: Response
) {
  try {
    const body = req.body;
    const response = await createVehicle(body);
    const vehicle = omit(response.toJSON, "enquiredVehicle");
    await updateUser(
      response._id,
      { $addToSet: { enquiredVehicle: response._id } },
      { new: true }
    );
    return res.status(200).json({ data: vehicle });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
}

export async function getVehiclesHandler(req: Request, res: Response) {
  try {
    const user = res.locals.user._id;
    const vehicles = await findVehicles(user.enquiredVehicle);
    if (!vehicles) {
      return res.status(400).json({ error: "unauthorised user" });
    }
    res.status(200).json({ data: vehicles });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
}

export async function getVehicleHandler(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const owner = res.locals.user._id;
    if (!owner) {
      return res.status(400).json({ error: "unauthorized user" });
    }
    if (id !== owner.enquiredVehicle) {
      return res.status(400).json({ error: "unauthorized user" });
    }
    const vehicle = await findVehicle(owner.enquiredVehicle);
    return res.status(200).json({ data: vehicle });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
}

export async function updateVehicleHandler(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const body = req.body;
    const vehicle = await findVehicle(id);
    if (!vehicle) {
      return res.status(400).json({ error: "vehicle not found" });
    }
    const owner = res.locals.user._id;
    if (!owner) {
      return res.status(400).json({ error: "unauthorized user" });
    }
    if (vehicle.id !== owner.enquiredVehicle) {
      return res.status(400).json({ error: "unauthorized user" });
    }
    const updatedvehicle = await updateVehicles(owner, body, { new: true });
    return res.status(200).json({ data: updatedvehicle });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
}

export async function deleteVehicleHandler(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const vehicle = await findVehicle(id);
    if (!vehicle) {
      return res.status(400).json({ error: "vehicle not found" });
    }
    const owner = res.locals.user._id;
    if (!owner) {
      return res.status(400).json({ error: "unauthorized user" });
    }
    if (vehicle._id !== owner.enquiredVehicle) {
      return res.status(400).json({ error: "unauthorized user" });
    }
    const deletedvehicle = await deleteVehicle(vehicle._id);
    return res.status(200).json({ data: deletedvehicle });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
}