import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { TheaterHomeComponent } from './theater-home/theater-home.component'
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule      ,
    RouterModule.forChild([
      { path: '', component: TheaterHomeComponent }
    ])
  ],
  declarations: [TheaterHomeComponent],
  exports: [TheaterHomeComponent]
})
export class TheaterModule { }
