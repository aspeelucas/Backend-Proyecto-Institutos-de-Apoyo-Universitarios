import institutos from "../data/institutos.json";
import { NextFunction, Request, Response } from "express";
import {addPlace} from "../services/places.services";


export async function PostPlacesController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { nombre, img, coordenadas, descripcion } = req.body;
    const place = await addPlace({ nombre, img, coordenadas, descripcion });
    return res.status(200).json({place,message:"Se agrego correctamente"});
  } catch (error) {
    next(error);
  }
}
