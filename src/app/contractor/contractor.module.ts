import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatPaginatorModule  } from '@angular/material/paginator';
import {  MatCheckboxModule } from '@angular/material/checkbox';
import {  MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {  MatDialogModule } from '@angular/material/dialog';
import { ContractorRoutingModule } from './contractor-routing.module';
import { ContractorComponent, DialogComponent } from './contractor.component';


@NgModule({
  imports: [
    CommonModule,
    ContractorRoutingModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  entryComponents: [DialogComponent],
  declarations: [ContractorComponent, DialogComponent]
})
export class ContractorModule { }
