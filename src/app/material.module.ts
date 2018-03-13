import {NgModule} from '@angular/core';
import {MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule} from '@angular/material';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule,
            MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
            MatIconModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule,
            MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule,
            MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
            MatIconModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule,
            MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule]
})


export class MaterialModule {}