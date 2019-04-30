import { FETCH_SHOWS, FETCH_SHOWS_SUCCESSFULL } from "./../actioTypes";
import { IShow } from "./index";

const initalState = [];

export function showReducer(state: IShow[] = initalState, action: any) {
  switch (action.type) {
    case FETCH_SHOWS_SUCCESSFULL:
      return action.payload;
    default:
      return state;
  }
}
