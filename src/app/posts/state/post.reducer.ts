import { createReducer } from "@ngrx/store";
import { initialState } from "./post.state";

const _postReducer = createReducer(
  initialState)

export function PostReducer(state: any, action: any) {
  return _postReducer(state, action);
}
