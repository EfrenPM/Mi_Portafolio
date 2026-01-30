export interface ITarjetaProyecto {
    id: number;
    title: string;
    description: string;
    link: string;
  }
  
  export interface ITarjetaHabilidad {
    logo: string;
    nombre: string;
    descripcion: string;
    nivel: number;
  }
  
  export interface IExperiencia {
    puesto: string;
    empresa: string;
    periodo: string;
    descripcion: string;
  }
  