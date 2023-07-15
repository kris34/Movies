import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { IMovie } from 'src/app/shared/interfaces/movie';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  movie: IMovie | null;

  form = this.fb.group({
    title: ['', [Validators.required]],
    genre: ['', [Validators.required]],
    directors: ['', [Validators.required]],
    actors: ['', [Validators.required]],
    year: ['', [Validators.required]],
    imageUrl: ['', [Validators.required]],
    description: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(180),
      ],
    ],
  });

  constructor(
    private route: ActivatedRoute,
    private movieApi: MovieService,
    private router: Router,
    private fb: FormBuilder,
    private api: ApiService
  ) {
    this.getMovie();
  }

  getMovie() {
    const id = this.route.snapshot.paramMap.get('id');

    return this.api.loadMovie(id).subscribe({
      next: (v) => {
        this.movie = v;
        console.log(this.movie);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateMovie() {
    if (this.form.invalid) {
      return;
    }
    
    const id = this.route.snapshot.paramMap.get('id');
    this.movieApi.editMovie(id!, this.form.value).subscribe({
      next: (v) => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
