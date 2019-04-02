import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[RatingComponent],
  declarations: [RatingComponent]
})
export class SharedModule { }
