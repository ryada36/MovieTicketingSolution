import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input('name') displayName = '';
  @Input('rating') displayRating;
  @Output('setRating') setRating = new EventEmitter();
  constructor() {}

  onClick(ratingValue){
    this.setRating.emit(ratingValue);
  }

  ngOnChanges(){
    console.log('current rating ',this.displayRating);
  }

  ngOnInit() {
  }

}
