import { FETCH_MOVIES_START, FETCH_MOVIES_SUCCESSFULL } from './../actioTypes';
import { IMovie } from './index';

const inititalState = [{
    id: '',
    name: '',
    description: '',
    duration: '',
    releaseDate: null,
    image: ''
}]

export function movieReducer(state:IMovie[] = inititalState, action: any){
    switch(action.type){
        case FETCH_MOVIES_START :
            return state;
        case FETCH_MOVIES_SUCCESSFULL :
            return state.concat(action.payload);
        default :
        return state;
    }
}