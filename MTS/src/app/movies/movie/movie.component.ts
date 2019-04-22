import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { IMovie } from "./../../store/reducers/";
import { HOST_NAME } from "./../../service/endPoints";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  @Input() movie: IMovie;
  moviePosterURL: string;
  constructor(private router: Router) {}

  ngOnInit() {}

  ngOnChanges() {
    this.moviePosterURL = `${HOST_NAME}${this.movie.image}`;
  }

  goToDetail() {
    this.router.navigateByUrl(`movies/${this.movie._id}`);
  }
}
