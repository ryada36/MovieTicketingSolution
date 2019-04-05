import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "./material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

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
    RegisterComponent
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
    FormsModule
  ],
  providers: [],
  entryComponents: [SigninComponent, RegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
