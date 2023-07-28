import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './create/create.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './details/movie.component';
import { MovieResolver } from './resolvers/movie.resolver';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../shared/shared.module';
import { CommentComponent } from './comment/comment.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './comment/store/comment.reducers';
import { EffectsModule } from '@ngrx/effects';
import { CommentEffects } from './comment/store/comment.effects'

@NgModule({
  declarations: [
    CreateComponent,
    MovieComponent,
    EditComponent,
    CommentComponent,
  ],
  imports: [
    StoreModule.forFeature('comments',reducers),
    EffectsModule.forFeature([CommentEffects]),
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MovieRoutingModule,
    SharedModule,
  ],
  exports: [CreateComponent,  MovieComponent],
})
export class MovieModule {}
