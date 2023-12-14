import express, { Request, Response } from "express";
import institutos from "./data/institutos.json";

const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// PIDE TODOS LOS INSTITUTOS

app.get("/places", (req: Request, res: Response) => {
  if (!institutos) {
    res
      .status(404)
      .json({ message: "No se encontraron institutos disponibles" });
  }
  return res.status(200).json(institutos);
});


// PIDE UN INSTITUTO POR ID

app.get("/places/:id", (req:Request, res: Response) => {
  const {id} = req.params;
  const instituto = institutos.find((instituto) => instituto.id === parseInt(id));
  if (!instituto) {
    res.status(404).json({ message: "No se encontro el instituto" });
  }
 return res.status(200).json(instituto);
});




// AGREGA UN NUEVO INSTITUTO

app.post("/places", (req:Request, res: Response) => {
  const {id, nombre, img, coordenadas, descripcion} = req.body;
  if(!id || !nombre || !img || !coordenadas || !descripcion){
      res.status(400).json({message: "Faltan datos"});
  }
  res.status(201).json({id, nombre, img, coordenadas, descripcion}); 
});



// ELIMINAR UN INSTITUTO
app.delete("/places/:id", (req:Request, res: Response) => {
  const {id} = req.params;
  const instituto = institutos.find((instituto) => instituto.id === parseInt(id));
  if (!instituto) {
    res.status(404).json({ message: "No se encontro el instituto" });
  }
  res.status(200).json({message: "Se elimino el instituto exitosamente"});
});



// EDITAR UN INSTITUTO

app.put("/places/:id", (req:Request, res: Response) => {
  const {id} = req.params;
  const {nombre, img, coordenadas, descripcion} = req.body;
  const instituto = institutos.find((instituto) => instituto.id === parseInt(id));
  if (!instituto) {
    res.status(404).json({ message: "No se encontro el instituto" });
  }
  res.status(200).json({id, nombre, img, coordenadas, descripcion});
});





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
