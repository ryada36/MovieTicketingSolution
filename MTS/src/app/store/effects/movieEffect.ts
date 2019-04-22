import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { FETCH_MOVIES } from "./../actioTypes";
import { fetchMoviesSuccessfull } from "./../actions/movieActions";
import { of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { MoviesService } from "./../../service/movies.service";

@Injectable()
export class MovieEffect {
  constructor(private actions$: Actions, private movieService: MoviesService) {}

  @Effect()
  fetchMovies$ = this.actions$.pipe(
    ofType(FETCH_MOVIES),
    mergeMap(() =>
      this.movieService.getMovies().pipe(
        map(movies => fetchMoviesSuccessfull(movies)),
        catchError(err => of({ type: "FETCH_MOVIES_ERROR", payload: err }))
      )
    )
  );
}
