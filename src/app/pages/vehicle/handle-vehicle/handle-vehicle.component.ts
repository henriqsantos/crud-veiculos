import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { IVehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-handle-vehicle',
  templateUrl: './handle-vehicle.component.html',
  styleUrls: ['./handle-vehicle.component.scss'],
})
export class HandleVehicleComponent implements OnInit {
  formGroup: FormGroup = this.formBuilder.group({
    id: [null],
    marca: [null, [Validators.required]],
    modelo: [null, [Validators.required]],
    ano: [null, [Validators.required]],
    dataUltimaCompra: [null, [Validators.required]],
    cor: [null, [Validators.required]],
    valor: [null, [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private vehicleService: VehicleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (history?.state?.vehicle) {
      this.formGroup.patchValue(history.state.vehicle);
    }
  }

  save() {
    const vehicle: IVehicle = this.formGroup.value;
    this.vehicleService.save(vehicle);
    this.router.navigate(['/list-vehicle']);
  }
}
