import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  currentRating = '3';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToTheaters(){
    console.log('go to theater landing page');
    this.router.navigateByUrl('/theater');
  }
  setNewRating(val){
    this.currentRating = val;
  }

}
