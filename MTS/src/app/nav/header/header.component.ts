import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {  MatDialog } from '@angular/material'
import { SigninComponent } from './../../overlays/signin/signin.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  public openSignInModal = () => {
    console.log('opening modal');
    const dialogRef = this.dialog.open(SigninComponent,{
      // width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Sign in closed');
    })

  }

}
