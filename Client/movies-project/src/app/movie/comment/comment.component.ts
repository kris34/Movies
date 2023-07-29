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

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  isLoading$: Observable<boolean>;
  comments$: Observable<IComment[]>;
  id: string;

  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.comments$ = this.store.pipe(select(commentsSelector(this.id!)));
  }

  ngOnInit(): void {
    this.store.dispatch(CommentActions.getComments());
  }
}
