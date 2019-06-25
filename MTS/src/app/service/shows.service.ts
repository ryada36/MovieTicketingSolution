import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HOST_NAME } from "./endPoints";

@Injectable({
  providedIn: "root"
})
export class ShowsService {
  getShowsEndPoint = `${HOST_NAME}/api/shows`;

  constructor(private http: HttpClient) {}

  fetchShows({ movieId, selectedDate }) {
    return this.http.get(`${this.getShowsEndPoint}/${movieId}/${selectedDate}`);
  }
  fetchShowById(showId) {
    return this.http.get(`${this.getShowsEndPoint}/${showId}`);
  }
}
