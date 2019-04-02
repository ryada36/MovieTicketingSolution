import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theater-home',
  templateUrl: './theater-home.component.html',
  styleUrls: ['./theater-home.component.css']
})
export class TheaterHomeComponent implements OnInit {

  selectedDate:number = 1;

  constructor() { }

  ngOnInit() {
  }

  displayShows(event){
    this.selectedDate = Number(event.target.textContent);
  }

  showBookingFlow(){
    console.log('launch show booking flow on an overlay');
  }

}
