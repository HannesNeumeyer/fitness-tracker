import {NgModule} from '@angular/core';
import {MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule} from '@angular/material';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule,
            MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
            MatIconModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule,
            MatProgressSpinnerModule, MatDialogModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule,
            MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
            MatIconModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule,
            MatProgressSpinnerModule, MatDialogModule]
})


export class MaterialModule {}