import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState, IShow } from "src/app/store/reducers";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { map, switchMap } from "rxjs/operators";
import { showReducer } from "src/app/store/reducers/showReducer";
import { Observable } from "rxjs";
import { ShowsService } from "src/app/service/shows.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BookingService } from "src/app/service/booking.service";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"]
})
export class PaymentComponent implements OnInit {
  selectedShow: IShow;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  ticketCount: number;
  orderSuccessfull: Boolean = false;
  internetHandlingFees: number = 100;
  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private showService: ShowsService,
    private _formBuilder: FormBuilder,
    private bookingService: BookingService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          var id = params.get("id");
          return this.store.select(state => {
            if (!state.shows.length) {
              console.log("store is not set up");
              // fetch the show detail from service
              return this.showService.fetchShowById(id);
            }
            return state.shows.filter(show => show._id == id)[0];
          });
        })
      )
      .subscribe(show => {
        if (show instanceof Observable) {
          show.subscribe(ids => (this.selectedShow = ids as IShow));
        } else this.selectedShow = show;
      });

    // create form
    this.firstFormGroup = this._formBuilder.group({
      emailCtrl: ["", Validators.email],
      phoneCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      couponCtrl: ["", Validators.required],
      ticketsCountCtrl: ["", Validators.required]
    });

    this.ticketCount = this.secondFormGroup.controls["ticketsCountCtrl"].value;
    this.secondFormGroup
      .get("ticketsCountCtrl")
      .valueChanges.subscribe(val => (this.ticketCount = val));
  }

  getTotalTicketAmount(): number {
    return this.selectedShow
      ? Number(this.ticketCount) * Number(this.selectedShow.price)
      : 0;
  }

  bookTicket() {
    const email = this.firstFormGroup.controls["emailCtrl"].value;
    const phone = this.firstFormGroup.controls["phoneCtrl"].value;
    const availableTickets = this.selectedShow.availableSeats
      ? Number(this.selectedShow.availableSeats) - Number(this.ticketCount)
      : Number(this.selectedShow.totalSeats) - Number(this.ticketCount);
    /**
     * TODO : when payment gateway is implemented send the payment information as well
     * after that update your data
     */

    this.bookingService
      .bookTicket(this.selectedShow._id, email, phone, availableTickets)
      .subscribe(
        (result: any) => {
          console.log("Status of booking", result);
          /** TODO: Need to show the booking status */
          this.orderSuccessfull = result.success;
        },
        err => {
          console.error(err);
        }
      );
  }
}
