import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from 'src/app/shared/interfaces/user';
import { MovieService } from 'src/app/movie/movie.service';
import { IMovie } from 'src/app/shared/interfaces/movie';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  

  constructor(private auth: AuthService, private api: ApiService) {
   
  }

  
}
