import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailsRoutingModule } from './detail-routing.module'
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  declarations: [DetailComponent]
})
export class DetailModule { }
