import { Component, OnInit } from "@angular/core";
import { fetchShows } from "./../../store/actions/showActions";
import { Store } from "@ngrx/store";
import { IAppState, IShow, IMovie, ITheater } from "./../../store/reducers/";
import { ActivatedRoute, Router } from "@angular/router";
import { MoviesService } from "./../../service/movies.service";
import { DAYS } from "./../../enums";
import { TheaterService } from "src/app/service/theater.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-theater-home",
  templateUrl: "./theater-home.component.html",
  styleUrls: ["./theater-home.component.css"]
})
export class TheaterHomeComponent implements OnInit {
  selectedDate: number = 1;
  shows: Map<String, any[]>;
  bookingDates: any[] = [];
  movieId: String;
  theaters: ITheater[];
  selectedMovie: IMovie;
  mySubscription: Subscription;

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private movieService: MoviesService,
    private theaterService: TheaterService,
    private router: Router
  ) {}

  /**
   * TODO : As of now it is showing theaterid , but get all the theaters on init and
   * then filter through to get theater we want based on the id
   */

  ngOnInit() {
    // get all the theaters
    this.theaterService.getTheaters().subscribe(theaters => {
      this.theaters = theaters as ITheater[];
    });

    //once you get the shows need to group them in a way that is suitable for us
    this.mySubscription = this.store
      .select(state => state.shows)
      .subscribe(shows => {
        console.log("shows form the state subscription", shows);
        this.shows = new Map<String, any[]>();
        shows.forEach(show => {
          if (this.shows.has(show.theaterId[0])) {
            var theaterSpecificShows = this.shows.get(show.theaterId[0]);
            theaterSpecificShows.push(show);
            this.shows.set(show.theaterId[0], theaterSpecificShows);
          } else {
            this.shows.set(show.theaterId[0], [].concat(show));
          }
        });

        console.log("Map of shows", this.shows);
      });

    // fetching shows based on the selected date and movie
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get("movieId");
      this.store.dispatch(fetchShows(this.movieId, this.selectedDate));
    });

    // to display the dates for which booking is available
    if (this.movieId) {
      this.movieService.getSelectedMovie(this.movieId).subscribe(movie => {
        this.selectedMovie = movie as IMovie;
        var releaseDate = this.selectedMovie.releaseDate;
        var date = new Date(releaseDate);
        if (Date.now() > Date.parse(date.toString())) {
          // show ticket from the current date because release date has passed

          for (let i = 0; i < 3; i++) {
            var dateInMiliSecond = Date.now() + i * 24 * 60 * 60 * 1000;
            var startDate = new Date(dateInMiliSecond);
            if (i == 0) this.selectedDate = Date.parse(startDate.toString());

            this.bookingDates.push({
              day: startDate.getDate(),
              dayTitle: i == 0 ? "Today" : DAYS[startDate.getDay()],
              value: Date.parse(startDate.toString())
            });
          }
        } else {
          // case when movie is yet to release
        }
      });
    }
  }

  ngOnDestroy() {
    // this.shows = null;
    console.log("destroy called");
    this.mySubscription.unsubscribe();
  }

  getTheaterName(id) {
    return this.theaters
      ? this.theaters.filter(theater => theater._id == id)[0].name
      : "";
  }

  getShowTime(timeString) {
    const date = new Date(timeString);
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  displayShows(dateValue) {
    this.selectedDate = dateValue;
    console.log("show the shows for selected date ", this.selectedDate);
    this.store.dispatch(fetchShows(this.movieId, this.selectedDate));
  }

  showBookingFlow(selectedShow) {
    console.log("launch show booking flow on an overlay", selectedShow);
    /** well the current predicament here is that i want the next
     * component in the flow to know about the currently selected show
     * either i can send that show to store and we are sorted or i can send the show id in
     * the url and fetch again which looks anti pattern and anti christ
     *  *************** BUT AS OF NOW I AM GOING ANTI PATTERN>/CHRIST ************
     */
    this.router.navigateByUrl(
      `theater/${this.movieId}/payment/${selectedShow._id}`
    );
  }
}
