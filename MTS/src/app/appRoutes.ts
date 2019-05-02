import { HomeComponent } from "./home/home.component";
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";
import { HomeComponent as TheaterUserHomeComponent } from "./theaterUser/home/home.component";

export const routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  /** Need to secure it with route gurard */
  { path: "secure/dashboard", component: TheaterUserHomeComponent },
  { path: "movies/:id", component: MovieDetailComponent },
  {
    path: "theater/:movieId",
    loadChildren: "./theater/theater.module#TheaterModule"
  },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];
