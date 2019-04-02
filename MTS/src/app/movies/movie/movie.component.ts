import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToDetail(){
    console.log('take me to theaters showing this movie currently');
    // might need to pass some parameters along with it
    this.router.navigateByUrl('/movies/123');
  }

}
