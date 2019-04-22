import {
  FETCH_THEATERS_START,
  FETCH_THEATERS_SUCCESSFULL
} from "./../actioTypes";
import { ITheater } from "./index";

const initialState = [];

export function theaterReducer(state: ITheater[] = initialState, action: any) {
  switch (action.type) {
    case FETCH_THEATERS_START:
      return state;
    case FETCH_THEATERS_SUCCESSFULL:
      return state.concat(action.payload);
    default:
      return state;
  }
}
