import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MovieModule } from '../movie/movie.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, ProfileComponent, EditProfileComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    MovieModule
  ],
})
export class AuthModule {}
