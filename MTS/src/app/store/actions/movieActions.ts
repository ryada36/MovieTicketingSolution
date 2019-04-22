import { FETCH_MOVIES, FETCH_MOVIES_SUCCESSFULL } from "./../actioTypes";

export function fetchMovies() {
  return { type: FETCH_MOVIES };
}
export function fetchMoviesSuccessfull(movies) {
  return { type: FETCH_MOVIES_SUCCESSFULL, payload: movies };
}
