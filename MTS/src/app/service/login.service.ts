import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  loginEndPoint: string = "http://localhost:3200/auth/login";
  constructor(private http: HttpClient) {}

  login(email, password) {
    console.log(email, password);
    return this.http.post(this.loginEndPoint, { email, password });
  }
}
