import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HOST_NAME } from "./endPoints";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  subscriptionRegistrationEndPoint: string = `${HOST_NAME}/mts/subscriber`;

  constructor(private http: HttpClient) {}

  addSubscription(subscriber) {
    return this.http.post(this.subscriptionRegistrationEndPoint, subscriber);
  }
}
