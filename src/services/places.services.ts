
import GetInstituteDto from "../dtos/GetInstitute.dto";
import { Ipatchplace, Iplace } from "../interfaces/IPlaces";
import Institutos from "../models/places.model";

export async function getAllPlaces(): Promise<GetInstituteDto[]>{
       const places = await Institutos.find();
       return places.map((place) => new GetInstituteDto(place));

}

export async function getPlace(id:string): Promise<GetInstituteDto>{
    const place = await Institutos.findById(id);
    return  new GetInstituteDto(place);
}


export async function addPlace(place: Iplace){

    return await Institutos.create(place);

}

export async function deletePlace(id:string){
    return await Institutos.findByIdAndDelete(id);
}



export async function updatePlace(id:string,change:Ipatchplace){

    let place = await Institutos.findById(id);
    if(!place){
        return null;
    }
    if(change.coordenadas){
        place.coordenadas = Object.assign({}, place.coordenadas, change.coordenadas);
        delete change.coordenadas;
    }
    place = Object.assign(place, change);
    return place.save();
}

