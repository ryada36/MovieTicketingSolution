import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
  USER_SOCIAL_LOGIN
} from "./../actioTypes";
import {
  userLoginSuccessfull,
  userLogoutSuccessfull,
  userRegisterSuccessfull
} from "./../actions/userAction";
import { of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { LoginService } from "./../../service/login.service";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private loginService: LoginService) {}

  @Effect()
  logoutUser$ = this.actions$.pipe(
    ofType(USER_LOGOUT),
    mergeMap((action: any) =>
      this.loginService.logout(action.payload).pipe(
        map(response => userLogoutSuccessfull()),
        catchError(() => of({ type: "USER_LOGOUT_ERROR" }))
      )
    )
  );

  @Effect()
  loginSocialUser$ = this.actions$.pipe(
    ofType(USER_SOCIAL_LOGIN),
    mergeMap((action: any) =>
      this.loginService.loginSocialUser(action.payload).pipe(
        map(response =>
          userLoginSuccessfull({
            ...response.body,
            authToken: response.headers.get("authorization")
          })
        ),
        catchError(() => of({ type: "USER_LOGIN_ERROR" }))
      )
    )
  );

  @Effect()
  loginUser$ = this.actions$.pipe(
    ofType(USER_LOGIN),
    mergeMap((action: any) =>
      this.loginService
        .login(action.payload.email, action.payload.password)
        .pipe(
          map(response =>
            userLoginSuccessfull({
              ...response.body,
              authToken: response.headers.get("authorization")
            })
          ),
          catchError(() => of({ type: "USER_LOGIN_ERROR" }))
        )
    )
  );

  @Effect()
  registerUser$ = this.actions$.pipe(
    ofType(USER_REGISTER),
    mergeMap((action: any) =>
      this.loginService.register(action.payload.user).pipe(
        map(response =>
          userRegisterSuccessfull({
            ...response.body,
            authToken: response.headers.get("authorization")
          })
        ),
        catchError(err => of({ type: "USER_REGISTER_ERROR", payload: err }))
      )
    )
  );
}
