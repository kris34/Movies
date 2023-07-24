import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthGuardService } from './auth-guard.service';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[AuthGuardService]
  },  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: "edit-profile",
    component: EditProfileComponent 
  },
  { 
    path: "watchlist",
    component: WatchlistComponent
  },
  { 
    path: "list",
    component: ListComponent
  }
];

export const AuthRoutingModule = RouterModule.forChild(routes);
