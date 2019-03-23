import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data-service.service';
import { MatDialog, PageEvent, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  currentPageNum = 1;
  perPage = 10;
  count = 0;
  pageEvent: PageEvent;
  transactions: any;
  companies: any;
  currencies: any;
  searchForm: FormGroup;
  sortBy = 'id';
  sortDirection: 'ASC' | 'DESC' = 'ASC';

  constructor(private data: DataService, private dialog: MatDialog, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      dateFrom: [''],
      dateTo: [''],
      amountFrom: [''],
      amountTo: [''],
      currency: [''],
      fromAccount: [''],
      toAccount: ['']
    });
    this.loadTransaction();
  }

  ngOnInit() {
    this.searchForm.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(300)
    ).subscribe(() => {
      this.loadTransaction()
    });
  }

  loadTransaction() {
    console.log(this.searchForm.value);
    this.data.getTransactions({
      page: this.currentPageNum,
      perPage: this.perPage,
      searchForm: this.searchForm.value,
      sortBy: this.sortBy,
      sortDirection: this.sortDirection
    }).subscribe((data: any) => {
      console.log(data);
      this.transactions = data.transactions.list;
      this.count = data.transactions.count;
     // this.transactions.date = new Date(this.transactions.date);
    });
    this.data.getAllCompanies().subscribe((res: any) => {
      this.companies = res.companies;
    });
    this.data.getAllCurrencies().subscribe((res: any) => {
      this.currencies = res.currencies;
    });
  }

  delTransaction(id) {
    const dialogRef = this.dialog.open( DialogComponent, {
      height: '150px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.data.delTransaction(id).subscribe((res: any) => {
          this.loadTransaction();
          this.data.showAlert.next({type: 'success', message: 'Transaction was deleted!'});
        });
     }
    });
  }

  onChangePage(event: PageEvent): void {
    this.currentPageNum = event.pageIndex + 1;
    this.perPage = event.pageSize;
    this.loadTransaction();
    console.log(event);
  }

  setSort(fieldName) {
    this.sortBy = fieldName;
    this.sortDirection = this.sortDirection === 'ASC' ? 'DESC' : 'ASC';
    this.loadTransaction();
  }

 

}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: '../dialog-overview-example-dialog.html',
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  confComp(): void {
    this.dialogRef.close(true);
  }
  
}
