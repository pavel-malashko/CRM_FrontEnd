import { Routes } from '@angular/router';

export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'transactions', pathMatch: 'full' },
    { path: 'companies',      loadChildren: '../../companies/companies.module#CompaniesModule' },
    { path: 'companies/detail/:id',  loadChildren: '../../companies/detail/detail.module#DetailModule' },
    { path: 'companies/edit/:id',  loadChildren: '../../companies/edit/edit.module#EditModule' },
    { path: 'companies/create',  loadChildren: '../../companies/create/create.module#CreateModule' },
    // { path: 'contractors',         loadChildren: '../../contractor/contractor.module#ContractorModule' },
    // { path: 'contractors/detail/:id',  loadChildren: '../../contractor/detail/detail.module#DetailModule' },
    // { path: 'contractors/edit/:id',  loadChildren: '../../contractor/edit/edit.module#EditModule' },
    // { path: 'contractors/create',  loadChildren: '../../contractor/create/create.module#CreateContractorModule' },
    { path: 'documents',         loadChildren: '../../documents/documents.module#DocumentsModule' },
    { path: 'documents/detail/:id',         loadChildren: '../../documents/detail/detail.module#DetailModule' },
    { path: 'documents/edit/:id',         loadChildren: '../../documents/edit/edit.module#EditModule' },
    { path: 'documents/create',         loadChildren: '../../documents/create/create.module#CreateModule' },
    { path: 'bank-accounts',      loadChildren: '../../bank-accounts/bank-accouts.module#BankAccoutsModule' },
    { path: 'transactions',      loadChildren: '../../transaction/transaction.module#TransactionModule' },
    { path: 'transactions/create',      loadChildren: '../../transaction/create/create.module#CreateModule' },
    { path: 'transactions/edit/:id',      loadChildren: '../../transaction/edit/edit.module#EditModule' },
];
