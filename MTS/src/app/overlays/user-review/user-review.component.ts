import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { UserReviewService } from "src/app/service/user-review.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-user-review",
  templateUrl: "./user-review.component.html",
  styleUrls: ["./user-review.component.css"]
})
export class UserReviewComponent implements OnInit {
  userReviewForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private reviewService: UserReviewService,
    private dialogRef: MatDialogRef<UserReviewComponent>
  ) {
    this.userReviewForm = new FormGroup({
      review: new FormControl("")
    });
    console.log("passed  movie id ", this.data.movieId);
  }

  ngOnInit() {}

  postReview = () => {
    try {
      const review = this.userReviewForm.controls["review"].value;
      this.reviewService.postReview(review, this.data.movieId).subscribe(
        data => {
          console.log(data);
          this.dialogRef.close();
        },
        err => console.log("error occured", err)
      );
    } catch (err) {
      // need to show the error to front end
      console.log(err);
    }
  };
}
