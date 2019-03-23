import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
          path: '',
          loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule',
      },
  ]},
  { path: 'login',         loadChildren: './log-in/login.module#LoginModule' },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{ useHash: true })//
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
