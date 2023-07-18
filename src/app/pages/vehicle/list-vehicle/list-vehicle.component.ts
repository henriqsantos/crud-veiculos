import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IVehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.scss'],
})
export class ListVehicleComponent implements OnInit {
  dataSource: MatTableDataSource<IVehicle> = new MatTableDataSource();
  displayedColumns: string[] = [
    'marca',
    'modelo',
    'ano',
    'dataUltimaCompra',
    'cor',
    'valor',
    'btns',
  ];

  vehicles: IVehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.findVehicles();
  }

  findVehicles() {
    this.vehicles = this.vehicleService.findAll();
    this.dataSource = new MatTableDataSource(this.vehicles);
  }
}
