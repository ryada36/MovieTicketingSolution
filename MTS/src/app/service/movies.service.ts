import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HOST_NAME } from "./endPoints";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  getMoviesEndPoint: string = `${HOST_NAME}/movies`;

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(this.getMoviesEndPoint);
  }
}
