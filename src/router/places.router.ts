import { Router } from "express";
import { getPlacesController } from "../controller/getPlaces.controller";
import { getPlaceByIdController } from "../controller/getPlaceById.controller";
import { PostPlaceController } from "../controller/postPlace.controller";
import { DeletePlacesController } from "../controller/deletePlaces.controller";
import { PatchPlaceController } from "../controller/patchPlace.controller";
import { validatePatchBody, validatePlaceBody } from "../middlewares/validationMiddlewares";

export const placeRouter = Router();

// PIDE TODOS LOS INSTITUTOS

placeRouter.get('/',getPlacesController);


// PIDE UN INSTITUTO POR ID
placeRouter.get("/:id", getPlaceByIdController );



// AGREGA UN NUEVO INSTITUTO
placeRouter.post("/",validatePlaceBody, PostPlaceController);



// ELIMINAR UN INSTITUTO

placeRouter.delete("/:id", DeletePlacesController );



// EDITA UN INSTITUTO

placeRouter.patch("/:id", validatePatchBody,PatchPlaceController );


