import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HOST_NAME } from "./endPoints";

@Injectable({
  providedIn: "root"
})
export class UserReviewService {
  userReviewEndPoint: string = `${HOST_NAME}/api/reviews/users`;
  constructor(private http: HttpClient) {}

  getReviews(movieId) {
    const url = `${this.userReviewEndPoint}/${movieId}`;
    return this.http.get(url);
  }

  postReview(review, movieId) {
    console.log(review);
    return this.http.post(this.userReviewEndPoint, { review, movieId });
  }
}
