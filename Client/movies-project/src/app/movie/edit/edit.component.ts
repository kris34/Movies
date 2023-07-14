import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
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
    private api: MovieService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  updateMovie() {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.editMovie(id!, this.form.value).subscribe({
      next: (v) => {
        console.log(v);
      },
    });
  }
}
