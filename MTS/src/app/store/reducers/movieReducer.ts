import { FETCH_MOVIES_SUCCESSFULL } from "./../actioTypes";
import { IMovie } from "./index";

const inititalState = [
  //   {
  //     id: "",
  //     name: "",
  //     description: "",
  //     duration: "",
  //     releaseDate: null,
  //     image: ""
  //   }
];

export function movieReducer(state: IMovie[] = inititalState, action: any) {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESSFULL:
      return [].concat(action.payload.movies);
    default:
      return state;
  }
}
