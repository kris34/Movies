import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { MovieService } from 'src/app/movie/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  list$ = this.api.loadUserList();

  constructor(private api: ApiService, private movieService: MovieService) { }

  deleteMovie(id: string) {
    this.movieService.deleteMovie(id).subscribe({
      next: (v) => {
        this.list$ = this.api.loadUserList();
      }
    })
  }


}
