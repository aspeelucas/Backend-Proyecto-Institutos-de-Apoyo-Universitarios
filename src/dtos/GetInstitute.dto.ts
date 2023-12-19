class GetInstituteDto {
    id: number;
    name: string;
    img: string;
    coordenadas: {
        latitud: number;
        longitud: number;
    };
    descripcion: string;

 constructor(
    object : any,

     ) { 
        this.id = object._id;
        this.name = object.nombre;
        this.img = object.img;
        this.coordenadas = object.coordenadas;
        this.descripcion = object.descripcion;   
     }
} 

export default GetInstituteDto;