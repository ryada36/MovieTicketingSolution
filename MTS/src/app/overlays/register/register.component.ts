import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material";
import { userRegister } from "./../../store/actions/userAction";
import { Store } from "@ngrx/store";
import { IAppState } from "./../../store/reducers/";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private store: Store<IAppState>,
    private dialogRef: MatDialogRef<RegisterComponent>
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      confirmPassword: new FormControl("")
    });

    // for closing of dialog box only when the registration is successfull
    this.store
      .select(state => state.user)
      .subscribe(user => {
        if (user.authToken) this.dialogRef.close();
      });
  }

  ngOnInit() {}

  register() {
    const name = this.registerForm.controls["name"].value,
      email = this.registerForm.controls["email"].value,
      password = this.registerForm.controls["password"].value,
      confirmPassword = this.registerForm.controls["confirmPassword"].value;

    this.store.dispatch(userRegister({ name, email, password }));
  }
}
