import { Request, Response } from "express";
import { updatePlace } from "../services/places.services";

export async function PatchPlaceController (req:Request,res:Response){
    const {id} = req.params;
    const updatedPlace = await updatePlace(id,req.body);

    if(!updatedPlace){
        return res.status(400).json({message:"No se pudo actualizar el lugar"})
    }
    return res.status(200).json(updatedPlace);
  }

  