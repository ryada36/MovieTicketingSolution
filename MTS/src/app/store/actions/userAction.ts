import {
  USER_LOGIN,
  USER_LOGIN_COMPLETE,
  USER_LOGIN_START,
  USER_LOGOUT_SUCCESSFULL,
  USER_LOGOUT,
  USER_REGISTER,
  USER_REGISTER_SUCCESSFULL
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
export function logout(token) {
  return { type: USER_LOGOUT, payload: token };
}
export function userLogoutSuccessfull() {
  return { type: USER_LOGOUT_SUCCESSFULL };
}
export function userRegister(user) {
  return { type: USER_REGISTER, payload: { user } };
}
export function userRegisterSuccessfull(user) {
  return { type: USER_REGISTER_SUCCESSFULL, payload: { user } };
}
