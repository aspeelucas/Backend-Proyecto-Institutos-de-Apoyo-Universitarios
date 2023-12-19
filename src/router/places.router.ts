import { Router } from "express";
import { getPlacesController } from "../controller/getPlaces.controller";
import { getPlacesByIdController } from "../controller/getPlacesById.controller";
import { PostPlacesController } from "../controller/postPlaces.controller";
import { DeletePlacesController } from "../controller/deletePlaces.controller";
import { PutPlacesController } from "../controller/putPlaces.controller";
import { validatePlaceBody } from "../middlewares/validationMiddlewares";

export const placeRouter = Router();

// PIDE TODOS LOS INSTITUTOS

placeRouter.get('/',getPlacesController);


// PIDE UN INSTITUTO POR ID
placeRouter.get("/:id", getPlacesByIdController );



// AGREGA UN NUEVO INSTITUTO
placeRouter.post("/",validatePlaceBody, PostPlacesController);



// ELIMINAR UN INSTITUTO

placeRouter.delete("/:id", DeletePlacesController );



// EDITA UN INSTITUTO

placeRouter.put("/:id", PutPlacesController );


