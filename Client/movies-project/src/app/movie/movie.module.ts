import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './create/create.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieRoutingModule } from './movie-routing.module';


@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
  MovieRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CreateComponent
  ]
})
export class MovieModule { }
