import express from "express";
import routes from "./routes";
import { errors } from "celebrate";
import cors from "cors";
class App {
  constructor() {
    this.server = express();

    this.server.use(cors());
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(express.json());
  }
  routes() {
    this.server.use(routes);
    this.server.use(errors());
  }
}

export default new App().server;
