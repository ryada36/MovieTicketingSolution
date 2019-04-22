import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { IAppState, IMovie } from "./../../store/reducers/";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"]
})
export class MovieDetailComponent implements OnInit {
  movieId: string;
  selectedMovie: IMovie;
  currentRating = "3";
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<IAppState>
  ) {
    this.route.params.subscribe(params => (this.movieId = params.id));
    this.store
      .select(state => state.movies)
      .subscribe(movies => {
        this.selectedMovie = movies.filter(
          movie => movie._id == this.movieId
        )[0];
      });
  }

  ngOnInit() {
    // fetch the movie detail either from state or server, if store is empty
    if (!this.selectedMovie) console.log("fetch from server ", this.movieId);
  }
  goToTheaters() {
    this.router.navigateByUrl("/theater");
  }
  setNewRating(val) {
    this.currentRating = val;
  }
}
