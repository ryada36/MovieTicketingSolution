import { HomeComponent } from "./home/home.component";
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";

export const routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "movies/:id", component: MovieDetailComponent },
  {
    path: "theater/:movieId",
    loadChildren: "./theater/theater.module#TheaterModule"
  },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];
