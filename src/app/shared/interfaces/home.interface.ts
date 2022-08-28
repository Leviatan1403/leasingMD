export interface Distribuidores {
    distribuidores?: (DistribuidoresEntity)[] | null;
  }
  export interface DistribuidoresEntity {
    id: number;
    name: string;
  }

  export interface sendValues {
    idDistribuidor: number;
    paginaAuto: string;
    nombreCompleto: string;
    email: string;
  }
  
  