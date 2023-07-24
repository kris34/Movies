import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { ListComponent } from './list/list.component';
import { ApiService } from '../api.service';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    EditProfileComponent,
    WatchlistComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    
  ],
  exports: [],
})
export class AuthModule {}
