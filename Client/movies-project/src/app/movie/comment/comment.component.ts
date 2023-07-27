import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadComments } from 'src/app/shared/store/comment/comment.actions';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  constructor(private store: Store<{ comment: { comments: [] } }>) {}

  ngOnInit(): void {
    this.store.dispatch(loadComments())
    this.store.select('comment').subscribe((data) => {
      console.log(data);
    });
  }
}
