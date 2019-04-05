import { Injectable, Inject } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { USER_LOGIN } from "./../actioTypes";
import { userLoginSuccessfull } from "./../actions/userAction";
import { of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { LoginService } from "./../../service/login.service";

@Injectable()
export class UserEffects {
  @Effect()
  loginUser$ = this.actions$.pipe(
    ofType(USER_LOGIN),
    mergeMap((action: any) =>
      this.loginService
        .login(action.payload.email, action.payload.password)
        .pipe(
          map(user => userLoginSuccessfull(user)),
          catchError(() => of({ type: "USER_LOGIN_ERROR" }))
        )
    )
  );

  constructor(private actions$: Actions, private loginService: LoginService) {}
}
