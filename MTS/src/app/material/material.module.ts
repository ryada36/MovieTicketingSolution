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
  MatStepperModule
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
    MatStepperModule
  ]
})
export class MaterialModule {}
