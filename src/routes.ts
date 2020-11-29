import express from "express";

import PointController from "./controllers/pointsController";
import ItemsController from "./controllers/itemsController";

const routes = express.Router();

const pointController = new PointController()
const itemsController = new ItemsController()

routes.get("/items",itemsController.index );
routes.post("/points", pointController.create);
routes.get("/points/:id", pointController.show);
routes.get("/points", pointController.index);

export default routes;
