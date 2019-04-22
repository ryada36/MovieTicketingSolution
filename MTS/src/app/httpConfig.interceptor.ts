import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Store } from "@ngrx/store";
import { IAppState } from "./store/reducers/";

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  token: String;
  constructor(private store: Store<IAppState>) {
    this.store
      .select(state => state.user)
      .subscribe(user => {
        this.token = user.authToken;
      });
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.token)
      request = request.clone({
        headers: request.headers.set("Authorization", this.token.toString())
      });

    return next.handle(request);
  }
}
