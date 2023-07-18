import { Injectable } from '@angular/core';
import { IVehicle, vehicleStorage } from '../models/vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor() {}

  save(vehicle: IVehicle) {
    let vehicles: IVehicle[] = this.findAll();
    if (!vehicle.id) {
      vehicle.id = vehicles.length + 1;
      vehicles.push(vehicle);
    } else {
      const index = vehicles.findIndex((el) => el.id == vehicle.id);
      vehicles[index] = vehicle;
    }
    localStorage.setItem(vehicleStorage, JSON.stringify(vehicles));
  }

  findAll(): IVehicle[] {
    const vehicles = localStorage.getItem(vehicleStorage);
    return vehicles ? JSON.parse(vehicles) : [];
  }

  findById(id: number): IVehicle {
    let vehicles: IVehicle[] = this.findAll();
    const index = vehicles.findIndex((el) => el.id == id);
    return vehicles[index];
  }

  delete(vehicle: IVehicle) {
    let vehicles: IVehicle[] = this.findAll();
    const index = vehicles.findIndex((el) => el.id == vehicle.id);
    vehicles.splice(index, 1);
    localStorage.setItem(vehicleStorage, JSON.stringify(vehicles));
  }
}
