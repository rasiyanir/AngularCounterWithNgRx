import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postState } from "./post.state";

const getPostState = createFeatureSelector<postState>('posts');

export const getPosts = createSelector(getPostState, (state) => {
  return state.posts;
})

export const getPostById = createSelector(getPostState, (state: any, props: any) => {
  return state.posts.find((post: any) => post.id === props.id);
})
