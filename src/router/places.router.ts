import { Router } from "express";
import { getPlacesController } from "../controller/getPlaces.controller";
import { getPlaceByIdController } from "../controller/getPlaceById.controller";
import { PostPlaceController } from "../controller/postPlace.controller";
import { DeletePlacesController } from "../controller/deletePlaces.controller";
import { PatchPlaceController } from "../controller/patchPlace.controller";
import {
  validatePatchBody,
  validatePlaceBody,
} from "../middlewares/validationMiddlewares";

export const placeRouter = Router();

placeRouter.get("/", getPlacesController);

placeRouter.get("/:id", getPlaceByIdController);

placeRouter.post("/", validatePlaceBody, PostPlaceController);

placeRouter.delete("/:id", DeletePlacesController);

placeRouter.patch("/:id", validatePatchBody, PatchPlaceController);
