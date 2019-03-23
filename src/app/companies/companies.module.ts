import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent , DialogComponent} from './companies.component';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  entryComponents: [DialogComponent],
  declarations: [CompaniesComponent, DialogComponent]
})
export class CompaniesModule { }
