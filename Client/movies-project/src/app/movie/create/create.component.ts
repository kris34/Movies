import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    genre: ['', [Validators.required]],
    directors: ['', [Validators.required]],
    year: ['', [Validators.required]],
    imageUrl: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private movie: MovieService
  ) {}

  createMovieHandler() {
    if (this.form.invalid) {
      return;
    }

    this.movie.createMovie(this.form);
    this.router.navigate(['/']);
  }
}
