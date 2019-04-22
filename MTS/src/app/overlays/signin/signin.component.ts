import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormControl, FormGroup } from "@angular/forms";
import { RegisterComponent } from "./../register/register.component";
import { Store } from "@ngrx/store";
import { IAppState } from "./../../store/reducers/";

/** ========= user actions ========== */
import { userLogin } from "./../../store/actions/userAction";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<SigninComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public store: Store<IAppState>
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
    });
  }

  ngOnInit() {
    this.store
      .select(state => state.user)
      .subscribe(user => {
        if (user.authToken) this.dialogRef.close();
        console.log("User === >", user);
      });
  }

  login() {
    const email = this.loginForm.controls["email"].value;
    const password = this.loginForm.controls["password"].value;

    this.store.dispatch(userLogin(email, password));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  loadSignUp(event): void {
    event.preventDefault();
    this.dialogRef.close();
    this.dialog.open(RegisterComponent, {});
  }
}
