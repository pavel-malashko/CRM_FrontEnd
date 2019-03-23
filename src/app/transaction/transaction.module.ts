import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent, DialogComponent } from './transaction.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TransactionRoutingModule } from './transaction-routing.module';
import * as material from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  imports: [
    CommonModule,
    TransactionRoutingModule,
    material.MatPaginatorModule,
    material.MatCheckboxModule,
    material.MatButtonModule,
    material.MatIconModule,
    MatDialogModule,
    material.MatButtonModule,
    material.MatIconModule,
    MatDialogModule,
    material.MatInputModule,
    material.MatRippleModule,
    material.MatTooltipModule,
    material.MatSelectModule,
    ReactiveFormsModule,
    MatMomentDateModule,
    material.MatNativeDateModule,
    material.MatDatepickerModule
  ],
  entryComponents: [ DialogComponent ],
  declarations: [ TransactionComponent, DialogComponent ]
})
export class TransactionModule { }
