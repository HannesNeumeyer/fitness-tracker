import {NgModule} from '@angular/core';
import {MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule,
            MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
            MatIconModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule,
            MatProgressSpinnerModule, MatDialogModule, MatTableModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule,
            MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
            MatIconModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule,
            MatProgressSpinnerModule, MatDialogModule, MatTableModule]
})


export class MaterialModule {}