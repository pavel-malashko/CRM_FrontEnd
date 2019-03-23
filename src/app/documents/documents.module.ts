import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent, DialogComponent } from './documents.component';
import * as material from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    material.MatPaginatorModule,
    material.MatCheckboxModule,
    material.MatButtonModule,
    material.MatIconModule,
    material.MatDialogModule,
    material.MatNativeDateModule,
    material.MatDatepickerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  entryComponents: [DialogComponent],
  declarations: [DocumentsComponent, DialogComponent]


})
export class DocumentsModule { }
