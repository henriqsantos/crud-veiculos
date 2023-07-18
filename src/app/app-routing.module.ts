import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListVehicleComponent } from './pages/vehicle/list-vehicle/list-vehicle.component';
import { HandleVehicleComponent } from './pages/vehicle/handle-vehicle/handle-vehicle.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'list-vehicle',
    component: ListVehicleComponent,
  },
  {
    path: 'handle-vehicle',
    component: HandleVehicleComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
