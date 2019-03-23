import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data-service.service';
import { PageEvent } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.scss']
})
export class BankAccountsComponent implements OnInit {
  currentPageNum = 1;
  perPage = 10;
  count = 0;
  pageEvent: PageEvent;
  bankAccounts: Array<any> = new Array<any>();
  searchForm: FormGroup;
  sortBy = 'id';
  sortDirection: 'ASC' | 'DESC' = 'ASC';
  companies: any;
  constructor(private data: DataService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      bank: [''],
      code: [''],
      iban: [''],
      company: [''],
      comment: [''],
    });
    this.loadBankAccounts();
   }

   ngOnInit() {
    this.searchForm.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(300)
    ).subscribe(() => {
      this.loadBankAccounts()
    });
  }

   loadBankAccounts() {
    this.data.getBankAccounts({
      page: this.currentPageNum,
      perPage: this.perPage,
      sortBy: this.sortBy,
      sortDirection: this.sortDirection
    }).subscribe((res: any) => {
      this.bankAccounts = res.bankAccounts.list;
      this.count = res.bankAccounts.count;
      console.log(res, this.bankAccounts);
    });
    this.data.getAllCompanies().subscribe((res: any) => {
      this.companies = res.companies;
    });
   }

   onChangePage(event: PageEvent) {
    this.currentPageNum = event.pageIndex + 1;
    this.perPage = event.pageSize;
    this.loadBankAccounts();
    console.log(event);
  }
  setSort(fieldName) {
    this.sortBy = fieldName;
    this.sortDirection = this.sortDirection === 'ASC' ? 'DESC' : 'ASC';
    this.loadBankAccounts();
  }
}
