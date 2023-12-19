import { Request, Response } from "express";
import { getPlace } from "../services/places.services";

export async function getPlacesByIdController(req: Request, res: Response) {
  const { id } = req.params;
  const place = await getPlace(id);
  if (!place) {
    res.status(404).json({ message: "No se encontro el instituto" });
  }
  return res.status(200).json(place);
}
