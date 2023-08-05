import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { MovieComponent } from './details/movie.component';
import { MovieResolver } from './resolvers/movie.resolver';
import { EditComponent } from './edit/edit.component';
import { AuthGuardService } from '../user/auth-guard.service';
import { MovieGuardService } from './movie-guard.service';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { ProfileComponent } from '../user/profile/profile.component';

const routes: Routes = [
  {
    path: 'all-movies',
    component: AllMoviesComponent
  },

  {
    path: 'create',
    component: CreateComponent,
    canActivate: [MovieGuardService]
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
    component: EditComponent,
    canActivate: [MovieGuardService]
  },


];

/* @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})


export class MovieRoutingModule {} */
export const MovieRoutingModule = RouterModule.forChild(routes);
