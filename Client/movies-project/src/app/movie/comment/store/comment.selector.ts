import { createSelector, select } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';

export const selectFeature = (state: AppStateInterface) => state.comments;

export const isLoadingSelector = createSelector(selectFeature, (state) => {
  state.isLoading;
});

export const commentsSelector = createSelector(selectFeature, (state) => {
    state.comments;
  });

  export const errorSelector = createSelector(selectFeature, (state) => {
    state.error;
  });
  
