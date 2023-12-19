import { Request, Response } from "express";
import {deletePlace} from "../services/places.services";

export async function DeletePlacesController (req:Request,res:Response){
  const {id} = req.params;
  const place = await deletePlace(id);
  if(!place){

    return res.status(404).json({message:"No se encontro el instituto"});
  }
  return res.status(200).json({place,message:"Se elimino correctamente"});
}