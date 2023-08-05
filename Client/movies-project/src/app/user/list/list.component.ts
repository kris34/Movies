import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MovieService } from 'src/app/movie/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  list$ = this.api.loadUserList();
  noMovies: boolean = false


  constructor(private api: ApiService, private movieService: MovieService, private router: Router) { }
  ngOnInit(): void {
    this.list$.subscribe({
      next: (v) => {
        if (v.length < 1) {
          this.noMovies = true
        }
      }
    })
  }



  deleteMovie(id: string) {
    this.movieService.deleteMovie(id).subscribe({
      next: (v) => {
        this.list$ = this.api.loadUserList();

      }
    })
  }



}
