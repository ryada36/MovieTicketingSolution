import { NgModule } from "@angular/core";
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatGridListModule,
  MatCardModule,
  MatTabsModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule
} from "@angular/material";

@NgModule({
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ]
})
export class MaterialModule {}
