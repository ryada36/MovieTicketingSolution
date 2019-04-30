import { FETCH_SHOWS, FETCH_SHOWS_SUCCESSFULL } from "./../actioTypes";

export function fetchShows(movieId, selectedDate) {
  console.log("what the hell");
  return { type: FETCH_SHOWS, payload: { movieId, selectedDate } };
}
export function fetchShowsSuccessfull(shows) {
  return { type: FETCH_SHOWS_SUCCESSFULL, payload: shows };
}
