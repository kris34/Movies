import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './create/create.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './details/movie.component';
import { MovieResolver } from './resolvers/movie.resolver';
import { LikeComponent } from './like/like.component';
import { DislikeComponent } from './dislike/dislike.component';

@NgModule({
  declarations: [CreateComponent, MovieComponent, LikeComponent, DislikeComponent],
  imports: [
    MovieRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [CreateComponent, LikeComponent],
})
export class MovieModule {}
