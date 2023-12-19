import mongoose from "mongoose";

const placesSchema = new mongoose.Schema({
    nombre: String,
    img: String,
    coordenadas: {
        latitud: Number,
        longitud: Number,
    },
    descripcion: String,
    });

 const Institutos = mongoose.model("institutos", placesSchema);
    
 export default Institutos;
