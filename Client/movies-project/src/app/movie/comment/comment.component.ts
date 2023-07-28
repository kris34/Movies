import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CommentActions from './store/comment.actions'
import { AppStateInterface } from 'src/app/types/appState.interface';
import { commentsSelector, isLoadingSelector } from './store/comment.selector';
import { IComment } from 'src/app/shared/interfaces/comment';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit  {
  isLoading$: Observable<boolean>
  comments$: Observable<IComment[]>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.comments$ = this.store.pipe(select(commentsSelector))
  }

  
  ngOnInit(): void {
    this.store.dispatch(CommentActions.getComments())
  }


}
