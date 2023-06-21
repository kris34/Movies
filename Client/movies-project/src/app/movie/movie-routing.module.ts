import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { MovieComponent } from './details/movie.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: '/:id',
    component: MovieComponent,
  },
];

export const MovieRoutingModule = RouterModule.forChild(routes);
