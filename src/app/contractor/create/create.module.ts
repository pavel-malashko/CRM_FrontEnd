import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    CreateRoutingModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    MatSelectModule
  ],
  declarations: [CreateComponent]
})
export class CreateContractorModule { }
