import { ActionReducerMap } from '@ngrx/store'

import { userReducer } from './../reducers/userReducer';
import { movieReducer } from './../reducers/movieReducer';
import { theaterReducer } from './../reducers/theaterReducer';
import { showReducer } from './../reducers/showReducer';


export interface IAppState {
    user: IUser,
    movies: IMovie[],
    shows: IShow[],
    theaters: ITheater[]
}

export interface IUser {
    name: String
    token: String
    role: String
}

export interface IMovie {
    id: String,
    name: String,
    description: String,
    duration: String,
    releaseDate: Date,
    image: String
}

export interface IShow {
    id: String,
    startTime: DataCue,
    price: Number,
    totalSeats: Number,
    theaterId: String,
    movieId: String,
    availableSeats: Number
}

export interface ITheater {
    id: String,
    name: String,
    location: String,
    ownerId: String
}

export const appReducer: ActionReducerMap<IAppState> = {
    user: userReducer,
    movies: movieReducer,
    theaters: theaterReducer,
    shows: showReducer
}