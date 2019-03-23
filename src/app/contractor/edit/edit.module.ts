import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditComponent } from './edit.component'
import { EditRoutingModule } from './edit-routing.module';
import {
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    MatSelectModule
  } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    MatSelectModule,
    EditRoutingModule
  ],
  declarations: [EditComponent]
})
export class EditModule { }
