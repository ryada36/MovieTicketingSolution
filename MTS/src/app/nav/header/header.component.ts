import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material";
import { SigninComponent } from "./../../overlays/signin/signin.component";
import { IAppState, IUser } from "./../../store/reducers/";
import { Store } from "@ngrx/store";
import { logout } from "./../../store/actions/userAction";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  isLoggedIn: Boolean = false;
  currentToken: String;
  constructor(public dialog: MatDialog, public store: Store<IAppState>) {}

  ngOnInit() {
    this.store
      .select(state => state.user)
      .subscribe(user => {
        if (user.authToken) {
          this.isLoggedIn = true;
          this.currentToken = user.authToken;
        } else {
          this.isLoggedIn = false;
          this.currentToken = "";
        }
      });
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };

  public openSignInModal = () => {
    console.log("opening modal");
    const dialogRef = this.dialog.open(SigninComponent, {
      // width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Sign in closed");
    });
  };

  public logout() {
    console.log("Log out started");
    this.store.dispatch(logout(this.currentToken));
  }
}
