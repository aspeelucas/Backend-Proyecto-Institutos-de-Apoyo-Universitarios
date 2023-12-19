import  institutos  from "../data/institutos.json"
import { Request, Response } from "express";

export async function PutPlacesController (req:Request,res:Response){
    const {id} = req.params;
    const {nombre, img, coordenadas, descripcion} = req.body;
    const instituto = institutos.find((instituto) => instituto.id === parseInt(id));
    if (!instituto) {
      res.status(404).json({ message: "No se encontro el instituto" });
    }
    res.status(200).json({id, nombre, img, coordenadas, descripcion});
  }