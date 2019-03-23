import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';

import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule
} from '@angular/material';

// import {MatSelectModule} from '@angular/material/select';
// import {MatFormFieldModule} from '@angular/material/form-field';
import {
    AgmCoreModule
} from '@agm/core';

import { LoginRoutes } from './log-in.routing';

@NgModule({
    declarations: [
        LogInComponent,

    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(LoginRoutes),
        AgmCoreModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
    ],

})
export class LoginModule { }
