import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import {
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  imports: [
    CommonModule,
    EditRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatMomentDateModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  declarations: [EditComponent]
})
export class EditModule { }
