import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HOST_NAME } from "./endPoints";

@Injectable({
  providedIn: "root"
})
export class TheaterService {
  theaterEndPoints = `${HOST_NAME}/theaters`;
  constructor(private http: HttpClient) {}

  getTheaters() {
    return this.http.get(this.theaterEndPoints);
  }
}
