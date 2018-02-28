import {NgModule} from '@angular/core';
import {MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule,
            MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
            MatIconModule, MatListModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule,
            MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
            MatIconModule, MatListModule]
})


export class MaterialModule {}