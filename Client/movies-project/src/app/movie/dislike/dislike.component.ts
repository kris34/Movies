import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/shared/interfaces/movie';

@Component({
  selector: 'app-dislike',
  templateUrl: './dislike.component.html',
  styleUrls: ['./dislike.component.css'],
})
export class DislikeComponent {
  @Input() movie: IMovie;
  @Input() count: number;

  constructor() {}

  dislike(movie: IMovie ){ 

  }

}
