export interface IVehicle {
  id: number;
  marca: string;
  modelo: string;
  ano: number;
  dataUltimaCompra: Date;
  cor: string;
  valor: number;
}

export const vehicleStorage: string = 'VEHICLE_STORAGE';
