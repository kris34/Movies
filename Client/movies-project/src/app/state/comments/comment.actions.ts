import { createAction, props } from '@ngrx/store';
import { IComment } from 'src/app/shared/interfaces/comment';

export const addComment = createAction(
  '[Comment Page] add Comment',
  props<{ content: string }>()
);

