import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HOST_NAME } from "./endPoints";

@Injectable({
  providedIn: "root"
})
export class ShowsService {
  getShowsEndPoint = `${HOST_NAME}/shows`;

  constructor(private http: HttpClient) {
    console.log("what the hell");
  }

  fetchShows({ movieId, selectedDate }) {
    console.log("fetching shows ", movieId);
    return this.http.get(`${this.getShowsEndPoint}/${movieId}/${selectedDate}`);
  }
  fetchShowById(showId) {
    return this.http.get(`${this.getShowsEndPoint}/${showId}`);
  }
}
