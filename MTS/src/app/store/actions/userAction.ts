import {
  USER_LOGIN,
  USER_LOGIN_COMPLETE,
  USER_LOGIN_START
} from "./../actioTypes";

export function userLoginStart() {
  return { type: USER_LOGIN_START };
}
export function userLogin(email, password) {
  return { type: USER_LOGIN, payload: { email, password } };
}
export function userLoginSuccessfull(user) {
  return { type: USER_LOGIN_COMPLETE, payload: user };
}
