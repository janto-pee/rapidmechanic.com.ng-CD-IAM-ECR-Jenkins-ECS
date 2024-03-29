import express from "express";
import config from "config";
import { connectToDB } from "./utils/dbConnect";
import router from "./routes/routes";
import morgan from "morgan";
import deserializeUser from "./middleware/deserializeUser";
import swaggerDocs from "./utils/swagger";

const app = express();

app.use(express.json());
app.use(deserializeUser);
app.use(router);
app.use(morgan("dev"));

const port = config.get<number>("port");
console.log("port ", port);
app.listen(port, () => {
  connectToDB();
  console.log(`listening on port http://localhost:${port}`);
  swaggerDocs(app, port);
});
