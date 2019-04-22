import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RatingComponent } from "./rating/rating.component";
import { HttpConfigInterceptor } from "./../httpConfig.interceptor";

/** ============== import reducers ================== */
import { appReducer } from "./../store/reducers";

/** ============== import reducers ================== */
import { UserEffects } from "./../store/effects/userEffect";
import { MovieEffect } from "./../store/effects/movieEffect";
import { AdBannerComponent } from "./ad-banner/ad-banner.component";
import { AdHost } from "./adHost.directive";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([UserEffects, MovieEffect]),
    HttpClientModule,
    FlexLayoutModule,
    StoreDevtoolsModule.instrument({ maxAge: 10 })
  ],
  declarations: [RatingComponent, AdBannerComponent, AdHost],
  exports: [RatingComponent, AdBannerComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ]
})
export class SharedModule {}
