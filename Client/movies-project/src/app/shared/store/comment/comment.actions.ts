import { createAction, props } from '@ngrx/store';
import { IComment } from '../../interfaces/comment';

export const LOAD_COMMENT_SUCCESS = '[comment page] load comment success';
export const LOAD_COMMENT= '[comment page] load comment';



export const loadComments = createAction(LOAD_COMMENT);
export const loadCommentSucress = createAction(LOAD_COMMENT_SUCCESS, props<{commentList: IComment[]}>());
