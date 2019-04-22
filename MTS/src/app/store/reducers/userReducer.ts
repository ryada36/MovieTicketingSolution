// import { Action } from '@ngrx/store';
import {
  USER_LOGIN_COMPLETE,
  USER_LOGIN_START,
  USER_LOGOUT_SUCCESSFULL,
  USER_REGISTER_SUCCESSFULL
} from "./../actioTypes";
import { IUser } from "./index";

const initialState = {
  name: "",
  role: "",
  authToken: "",
  tokens: []
};

export function userReducer(state: IUser = initialState, action: any) {
  switch (action.type) {
    case USER_LOGIN_START:
      return state;
    case USER_LOGIN_COMPLETE:
      return Object.assign({}, state, action.payload);
    case USER_LOGOUT_SUCCESSFULL:
      return {};
    case USER_REGISTER_SUCCESSFULL:
      return Object.assign({}, state, ...action.payload.user);
    default:
      return state;
  }
}
