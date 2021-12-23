import { counterReducer } from "../counter/state/counter.reducer";
import { counterState } from "../counter/state/counter.state";
import { PostReducer } from "../posts/state/post.reducer";
import { postState } from "../posts/state/post.state";

export interface AppState {
  counter: counterState;
  posts: postState
}

export const appReducer = {
  counter: counterReducer,
  posts: PostReducer
}
