
export interface Iplace {
  nombre: string;
  img: string;
  coordenadas: Coordenadas;
  descripcion: string;
}

interface Coordenadas {
  latitud: number;
  longitud: number;
}

export interface Ipatchplace{
  nombre?: string;
  img?: string;
  coordenadas?: Coordenadas;
  descripcion?: string;
}