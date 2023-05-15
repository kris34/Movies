import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
  },
];

export const MovieRoutingModule = RouterModule.forChild(routes);
