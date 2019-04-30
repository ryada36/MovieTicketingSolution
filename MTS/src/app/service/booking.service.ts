import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HOST_NAME } from "./../service/endPoints";
import { from } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BookingService {
  bookingEndPoint = `${HOST_NAME}/payment`;

  constructor(private http: HttpClient) {}

  bookTicket(showId, email, phone, availableSeats) {
    console.log(showId, email, phone, availableSeats);
    return this.http.post(this.bookingEndPoint, {
      showId,
      email,
      phone,
      availableSeats
    });
  }
}
