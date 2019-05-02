import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "./material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
  // FacebookLoginProvider,
  // LinkedinLoginProvider
} from "angular-6-social-login";

import { AppComponent } from "./app.component";

import { routes } from "./appRoutes";

import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { HeaderComponent } from "./nav/header/header.component";
import { FooterComponent } from "./nav/footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./overlays/signin/signin.component";
import { MovieListComponent } from "./movies/movie-list/movie-list.component";
import { MovieComponent } from "./movies/movie/movie.component";
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";
import { MovieHeroSectionComponent } from "./movies/movie-hero-section/movie-hero-section.component";
import { MovieSummaryComponent } from "./movies/movie-summary/movie-summary.component";
import { RegisterComponent } from "./overlays/register/register.component";
import { SharedModule } from "./shared/shared.module";
import { ClientAdComponent } from "./client-ad/client-ad.component";
import { PaidAdComponent } from "./paid-ad/paid-ad.component";
import { HomeComponent as TheaterUserHomeComponent } from "./theaterUser/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SigninComponent,
    MovieListComponent,
    MovieComponent,
    MovieDetailComponent,
    MovieHeroSectionComponent,
    MovieSummaryComponent,
    RegisterComponent,
    ClientAdComponent,
    PaidAdComponent,
    TheaterUserHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: "VAPID_PUBLIC_KEY",
      useValue:
        "BK7VdPIvpsDteH-FKOrMGWe3Yp4zWpUFwVMQPweQevIoVZlx1QREo-0pYRYyB3jv1T85mwKJjS7JyNRRb5fSpK8"
    },
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  entryComponents: [
    SigninComponent,
    RegisterComponent,
    ClientAdComponent,
    PaidAdComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

// Configs
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    // {
    //   id: FacebookLoginProvider.PROVIDER_ID,
    //   provider: new FacebookLoginProvider("Your-Facebook-app-id")
    // },
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
        "607713332900-93hdkgrl8u1desthbactq5stas05c2k4.apps.googleusercontent.com"
      )
    }
    // {
    //   id: LinkedinLoginProvider.PROVIDER_ID,
    //   provider: new LinkedinLoginProvider(
    //     "1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com"
    //   )
    // }
  ]);
  return config;
}
