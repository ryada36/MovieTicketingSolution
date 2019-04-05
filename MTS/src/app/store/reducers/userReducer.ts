// import { Action } from '@ngrx/store';
import { USER_LOGIN_COMPLETE, USER_LOGIN_START } from "./../actioTypes";
import { IUser } from "./index";

const initialState = {
  name: "DASd",
  role: "",
  token: ""
};

export function userReducer(state: IUser = initialState, action: any) {
  switch (action.type) {
    case USER_LOGIN_START:
      return state;
    case USER_LOGIN_COMPLETE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
