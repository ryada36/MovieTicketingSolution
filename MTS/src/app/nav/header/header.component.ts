import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material";
import { SigninComponent } from "./../../overlays/signin/signin.component";
import { IAppState, IUser } from "./../../store/reducers/";
import { Store } from "@ngrx/store";
import { logout } from "./../../store/actions/userAction";
import { AuthService } from "angular-6-social-login";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  isLoggedIn: Boolean = false;
  currentToken: String;
  isSocialUser: Boolean = false;
  constructor(
    public dialog: MatDialog,
    public store: Store<IAppState>,
    private socialAuthService: AuthService
  ) {}

  ngOnInit() {
    this.store
      .select(state => state.user)
      .subscribe(user => {
        if (user.authToken) {
          this.isLoggedIn = true;
          this.currentToken = user.authToken;
          if (user.socialToken) {
            this.isSocialUser = true;
          }
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
    if (this.isSocialUser) {
      this.socialAuthService.signOut();
    }
    this.store.dispatch(logout(this.currentToken));
  }
}
