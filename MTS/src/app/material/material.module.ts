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
  MatProgressSpinnerModule
} from "@angular/material";

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
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
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {}
