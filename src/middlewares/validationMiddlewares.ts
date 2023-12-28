import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export  function validatePlaceBody(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {body} = req;
  const schema = Joi.object({
    nombre: Joi.string().required(),
    img: Joi.string().uri().required(),
    coordenadas: Joi.object({
      latitud: Joi.number().required(),
      longitud: Joi.number().required(),
    }).required(),
    descripcion: Joi.string().required(),
  })
  const {error,value} =  schema.validate(body,{allowUnknown:false})
  if(error){
    return res.status(400).json(error.details)
  }

  next()
}

export function validatePatchBody(
  req: Request,
  res: Response,
  next: NextFunction

){
  const {body} = req;
  const schema = Joi.object({
    nombre: Joi.string(),
    img: Joi.string().uri(),
    coordenadas: Joi.object({
      latitud: Joi.number(),
      longitud: Joi.number(),
    }),
    descripcion: Joi.string(),
  })
  const {error,value} = schema.validate(body,{allowUnknown:false})
  if(error){
    return res.status(400).json(error.details)
  }

  next()

}