import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postState } from "./post.state";

const getPostState = createFeatureSelector<postState>('posts');

export const getPosts = createSelector(getPostState, (state) => {
  return state.posts;
})
