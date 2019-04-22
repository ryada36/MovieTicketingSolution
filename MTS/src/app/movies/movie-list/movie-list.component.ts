import {
  Component,
  OnInit,
  AfterContentInit,
  ViewChild,
  Input
} from "@angular/core";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { MatGridList } from "@angular/material";
import { IMovie } from "./../../store/reducers";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit, AfterContentInit {
  @Input("movieList") movieList: IMovie[];

  @ViewChild("grid") grid: MatGridList;
  constructor(private observableMedia: ObservableMedia) {}

  gridByBreakpoint = {
    xl: 4,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1
  };

  ngOnInit() {}
  ngOnChanges() {}
  // this is required to dynamically update grid columns
  ngAfterContentInit() {
    // this.observableMedia.asObservable().subscribe((change: MediaChange) =>{
    //   this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    // })
  }
}
