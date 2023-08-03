import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MovieService } from 'src/app/movie/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  list$ = this.api.loadUserList();

  constructor(private api: ApiService, private movieService: MovieService, private router: Router) { }

  deleteMovie(id: string) {
    this.movieService.deleteMovie(id).subscribe({
      next: (v) => {
        this.list$ = this.api.loadUserList();
      }
    })
  }



}
