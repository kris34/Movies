import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from 'src/app/shared/interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  movies: IMovie[] | null = null;

  constructor(private router: Router) {}


}
