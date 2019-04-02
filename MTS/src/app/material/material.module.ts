import { NgModule } from '@angular/core';
import { MatSidenavModule, 
        MatToolbarModule, 
        MatIconModule, 
        MatListModule, 
        MatMenuModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatGridListModule,
        MatCardModule,
        MatTabsModule
      } from '@angular/material'

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
    MatTabsModule
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
    MatTabsModule
  ]
})
export class MaterialModule { }
