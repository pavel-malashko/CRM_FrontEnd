import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';
import { CreateRoutingModule } from './create-routing.module';
@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    CommonModule,
    CreateRoutingModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  declarations: [CreateComponent]
})
export class CreateModule { }
