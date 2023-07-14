import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { MovieComponent } from './details/movie.component';
import { MovieResolver } from './resolvers/movie.resolver';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: ':id',
    resolve: {
      cres: MovieResolver,
    },
    component: MovieComponent,
  },
  {
    path: ':id/edit',
    resolve: {
      cres: MovieResolver,
    },
    component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
