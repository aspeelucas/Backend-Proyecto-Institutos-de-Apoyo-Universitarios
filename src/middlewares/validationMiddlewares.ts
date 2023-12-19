import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export function validatePlaceBody(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {body} = req;
  const schema = Joi.object({
    nombre: Joi.string().required(),
    img: Joi.string().required(),
    coordenadas: Joi.object({
      latitud: Joi.number().required(),
      longitud: Joi.number().required(),
    }).required(),
    descripcion: Joi.string().required(),
    id: Joi.number(),
  })
  const {error,value} = schema.validate(body)
  if(error){
    return res.status(400).json(error.details)
  }

  next()
}
