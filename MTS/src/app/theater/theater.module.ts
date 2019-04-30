import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TheaterHomeComponent } from "./theater-home/theater-home.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from "../material/material.module";
import { PaymentComponent } from "./payment/payment.component";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([
      { path: "payment/:id", component: PaymentComponent },
      { path: "", component: TheaterHomeComponent }
    ])
  ],
  declarations: [TheaterHomeComponent, PaymentComponent],
  exports: [TheaterHomeComponent]
})
export class TheaterModule {}
