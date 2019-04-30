import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { FETCH_SHOWS } from "./../actioTypes";
import { fetchShowsSuccessfull } from "./../actions/showActions";
import { of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { ShowsService } from "./../../service/shows.service";

@Injectable()
export class ShowEffects {
  constructor(private actions$: Actions, private showService: ShowsService) {}

  @Effect()
  fetchShows$ = this.actions$.pipe(
    ofType(FETCH_SHOWS),
    mergeMap((action: any) =>
      this.showService.fetchShows(action.payload).pipe(
        map(shows => fetchShowsSuccessfull(shows)),
        catchError(err => of({ type: "FETCH_SHOWS_ERROR", payload: err }))
      )
    )
  );
}
