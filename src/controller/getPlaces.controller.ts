import { Request, Response } from "express";
import { getAllPlaces } from "../services/places.services";

export async function getPlacesController(req: Request, res: Response) {
  const places = await getAllPlaces();
  if (!places) {
    return res.status(400).json({ message: "No se encontraron lugares" });
  }
  return res.status(200).json(places);
}
