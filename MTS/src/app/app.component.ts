import { Component, OnInit, Inject } from "@angular/core";
import { SwPush } from "@angular/service-worker";
import { NotificationService } from "./service/notification.service";
import { environment } from "../environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "MTS";

  constructor(
    private swPush: SwPush,
    @Inject("VAPID_PUBLIC_KEY") private vapidPublicKey: string,
    private notificationService: NotificationService
  ) {}

  /**need a service that will push the subscription object to the server */
  ngOnInit() {
    if (environment.production) {
      this.swPush.subscription.subscribe(subscription => {
        console.log(subscription);
        if (!subscription) {
          this.swPush
            .requestSubscription({
              serverPublicKey: this.vapidPublicKey
            })
            .then(sub =>
              this.notificationService.addSubscription(sub).subscribe()
            )
            .catch(err =>
              console.error("subscription registration failed", err)
            );
        }
      });
    }
  }
}
