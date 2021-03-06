import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateUrl } from "src/app/store/router/custom-serializer";
import { getCurrentRoute } from "src/app/store/router/router.selector";
import { postState } from "./post.state";

export const POST_STATE_NAME = 'posts';

const getPostState = createFeatureSelector<postState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostState, (state) => {
  return state.posts;
})

export const getPostById = createSelector(getPosts, getCurrentRoute, (posts, route: RouterStateUrl) => {
  return posts ? posts.find((post: any) => post.id === route.params['id']) : null;
})
