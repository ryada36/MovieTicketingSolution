import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";

import { RatingComponent } from "./rating/rating.component";

/** ============== import reducers ================== */
import { appReducer } from "./../store/reducers";

/** ============== import reducers ================== */
import { UserEffects } from "./../store/effects/userEffect";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([UserEffects]),
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 10 })
  ],
  exports: [RatingComponent],
  declarations: [RatingComponent]
})
export class SharedModule {}
