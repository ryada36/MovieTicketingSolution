import { Component, OnInit, Input } from "@angular/core";
import { IMovie } from "./../../store/reducers/";
import { HOST_NAME } from "./../../service/endPoints";

@Component({
  selector: "app-movie-hero-section",
  templateUrl: "./movie-hero-section.component.html",
  styleUrls: ["./movie-hero-section.component.css"]
})
export class MovieHeroSectionComponent implements OnInit {
  @Input() selectedMovie: IMovie;
  moviePoster: string;
  constructor() {}

  ngOnInit() {}
  ngOnChanges() {
    if (this.selectedMovie)
      this.moviePoster = `url(${HOST_NAME}${this.selectedMovie.image})`;
  }
}
