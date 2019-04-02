import { Component, OnInit, Inject } from '@angular/core';
import {  MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { RegisterComponent } from './../register/register.component' 

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public dialog:MatDialog, public dialogRef: MatDialogRef<SigninComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 

  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  loadSignUp(event):void{
    event.preventDefault();
    this.dialogRef.close();
    this.dialog.open(RegisterComponent,{})
  }
}
