import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthGuardService } from './auth-guard.service';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { ListComponent } from './list/list.component';
import { authenticationGuard } from '../shared/guards/guest.guard';
import { OtherProfileComponent } from './other-profile/other-profile.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authenticationGuard()],
  },
  {
    path: ':id/profile',
    component: OtherProfileComponent,
    canActivate: [authenticationGuard()],
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    canActivate: [authenticationGuard()],
  },
  {
    path: 'watchlist',
    component: WatchlistComponent,
    canActivate: [authenticationGuard()],
  },
  {
    path: 'list',
    component: ListComponent,
    canActivate: [authenticationGuard()],
  },
];

export const AuthRoutingModule = RouterModule.forChild(routes);
