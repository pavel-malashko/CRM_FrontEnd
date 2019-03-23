import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccoutsRoutingModule } from './bank-accouts-routing.module';
import { BankAccountsComponent } from './bank-accounts.component';
import * as material from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BankAccoutsRoutingModule,
    ReactiveFormsModule,
    material.MatCheckboxModule,
    material.MatPaginatorModule,
    material.MatFormFieldModule,
    material.MatSelectModule,
    material.MatInputModule,
    material.MatButtonModule,
    material.MatIconModule,
    material.MatDialogModule,
    material.MatNativeDateModule,
    material.MatDatepickerModule,
  ],
  declarations: [BankAccountsComponent]
})
export class BankAccoutsModule { }
