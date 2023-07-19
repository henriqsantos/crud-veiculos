import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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
  filter: string = '';

  constructor(private vehicleService: VehicleService, private router: Router) {}

  ngOnInit() {
    this.findVehicles();
  }

  findVehicles() {
    this.vehicles = this.vehicleService.findAll();
    this.dataSource = new MatTableDataSource(this.vehicles);
  }

  edit(vehicle: IVehicle) {
    this.router.navigate(['/handle-vehicle'], { state: { vehicle: vehicle } });
  }

  delete(vehicle: IVehicle) {
    this.vehicleService.delete(vehicle);
    this.findVehicles();
  }

  onFilter() {
    if (this.filter.trim().length > 0) {
      let filteredList = this.vehicles.filter(
        (el) =>
          el.marca.toLowerCase().includes(this.filter.toLowerCase()) ||
          JSON.stringify(el.ano).includes(this.filter) ||
          el.modelo.toLowerCase().includes(this.filter.toLowerCase())
      );
      this.dataSource = new MatTableDataSource(filteredList);
    } else {
      this.dataSource = new MatTableDataSource(this.vehicles);
    }
  }

  get totalValue(): number {
    let total = this.dataSource.data.reduce((a, b) => a + (b['valor'] || 0), 0);
    return total;
  }
}
