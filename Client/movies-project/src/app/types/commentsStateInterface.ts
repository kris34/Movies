import { IComment } from 'src/app/shared/interfaces/comment';

export interface commentsStateInterface { 
    isLoading: boolean, 
    comments: IComment[],
    error: string | null
}