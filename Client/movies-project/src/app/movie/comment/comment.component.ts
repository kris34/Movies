import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/shared/interfaces/comment';
import { loadComments } from 'src/app/state/comments/comment.actions';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comments: Observable<IComment[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
   this.comments = this.store.select(getComments)
    this.store.dispatch(loadComments())
  }
}
