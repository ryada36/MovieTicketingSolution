import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState, IMovie } from "./../store/reducers/";
import { fetchMovies } from "./../store/actions/movieActions";

//importing static ads
import { ADS } from "./../staticAds";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  movies: IMovie[];
  ads: any = ADS;
  constructor(private store: Store<IAppState>) {
    if (!this.movies) this.store.dispatch(fetchMovies());
  }

  ngOnInit() {
    this.store
      .select(state => state.movies)
      .subscribe(movies => {
        if (movies && movies.length > 0) this.movies = movies;
      });
  }
}
