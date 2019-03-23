import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractorComponent } from './contractor.component';

const routes: Routes = [
  { path: '', component: ContractorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractorRoutingModule { }
