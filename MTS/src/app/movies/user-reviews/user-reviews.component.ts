import { Component, OnInit, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { IAppState } from "src/app/store/reducers";
import { MatDialog } from "@angular/material";
import { UserReviewComponent } from "src/app/overlays/user-review/user-review.component";
import { UserReviewService } from "src/app/service/user-review.service";
import * as moment from "moment";

@Component({
  selector: "app-user-reviews",
  templateUrl: "./user-reviews.component.html",
  styleUrls: ["./user-reviews.component.css"]
})
export class UserReviewsComponent implements OnInit {
  reviews: any;
  movieId: string;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private store: Store<IAppState>,
    private reviewService: UserReviewService
  ) {
    this.route.params.subscribe(params => (this.movieId = params.id));
  }

  ngOnInit() {
    this.reviewService.getReviews(this.movieId).subscribe(
      (data: any) => {
        this.reviews =
          data && data.length
            ? data.map(review => {
                return {
                  review: review["review"],
                  author: review["author"],
                  postedTime: moment(review["postedTime"]).fromNow()
                };
              })
            : [];
      },
      err => {}
    );
  }
  openReviewModel = event => {
    this.dialog.open(UserReviewComponent, {
      data: { movieId: this.movieId }
    });
  };
}
