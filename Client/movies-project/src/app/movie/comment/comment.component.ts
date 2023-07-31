import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map, pipe } from 'rxjs';
import * as CommentActions from '../../shared/store/comment/comment.actions';
import { AppStateInterface } from 'src/app/types/appState.interface';
import {
  commentsSelector,
  isLoadingSelector,
} from '../../shared/store/comment/comment.selector';
import { IComment } from 'src/app/shared/interfaces/comment';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  isLoading$: Observable<boolean>;
  comments$: Observable<IComment[]>;
  id: string;

  form = this.fb.group({
    content: ['']
  })


  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute,
    private api: MovieService,
    private fb: FormBuilder
  ) {
    this.id = this.route.snapshot.params['id'];
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.comments$ = this.store.pipe(select(commentsSelector(this.id!)));
  }


  ngOnInit(): void {
    this.store.dispatch(CommentActions.getComments());
  }

  onComment() {
    if (!this.form.valid) {
      return
    }
   
    this.api.postMovieComment('64be7b2a914737b5a76b3812', this.form.value).subscribe({
      next: (v) => {
        console.log(v);
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}
