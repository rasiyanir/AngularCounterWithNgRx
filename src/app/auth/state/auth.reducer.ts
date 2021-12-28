import { createReducer, on } from "@ngrx/store";
import { loginSuccess } from "./auth.actions";
import { initialState } from "./auth.state";

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    console.log(action.user);
    return {
      ...state,
      user: action.user,
    }
  }))

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
