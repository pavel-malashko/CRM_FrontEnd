import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { EditRoutingModule } from './edit-routing.module';
import {RouterModule} from '@angular/router';
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

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    CommonModule,
    ReactiveFormsModule,
    EditRoutingModule,
    RouterModule,
    MatCheckboxModule
  ],
  declarations: [EditComponent]
})
export class EditModule { }
