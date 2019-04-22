import { FETCH_SHOWS_START, FETCH_SHOWS_SUCCESSFULL } from "./../actioTypes";
import { IShow } from "./index";

const initalState = [];

export function showReducer(state: IShow[] = initalState, action: any) {
  switch (action.type) {
    case FETCH_SHOWS_START:
      return state;
    case FETCH_SHOWS_SUCCESSFULL:
      return state.concat(action.payload);
    default:
      return state;
  }
}
