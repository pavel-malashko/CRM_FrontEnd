import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
//MatNativeDateModule, MatMomentDateModule
import { MatPaginatorModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatSelectModule,
  MatNativeDateModule,
} from '@angular/material';
  import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  imports: [
    CommonModule,
    CreateRoutingModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatMomentDateModule
  ],
  declarations: [CreateComponent]
})
export class CreateModule { }
