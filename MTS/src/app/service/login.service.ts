import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HOST_NAME } from "./endPoints";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  loginEndPoint: string = `${HOST_NAME}/auth/login`;
  loginSocialEndPoint: string = `${HOST_NAME}/auth/social_login`;
  logoutEndPoint: string = `${HOST_NAME}/auth/me`;
  registerEndPoint: string = `${HOST_NAME}/auth/register`;
  constructor(private http: HttpClient) {}

  login(email, password) {
    return this.http.post(
      this.loginEndPoint,
      { email, password },
      { observe: "response" }
    );
  }
  loginSocialUser(user) {
    return this.http.post(this.loginSocialEndPoint, user, {
      observe: "response"
    });
  }
  register(user) {
    return this.http.post(
      this.registerEndPoint,
      { user },
      { observe: "response" }
    );
  }

  logout(token) {
    const finalLogoutEndPoint = `${this.logoutEndPoint}/${token}`;
    return this.http.delete(finalLogoutEndPoint);
  }
}
