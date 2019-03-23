import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent, MatDialogRef } from '@angular/material';
import { DataService } from 'app/data-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  documents: Array<any> = new Array<any>();
  currentPageNum = 1;
  perPage = 10;
  count = 0;
  pageEvent: PageEvent;
  searchForm: FormGroup;
  currencies: any;
  companies: any;
  types: any;
  sortBy = 'id';
  sortDirection: 'ASC' | 'DESC' = 'ASC';

  constructor(private data: DataService, public dialog: MatDialog, private fb: FormBuilder) {
     this.searchForm = this.fb.group({
      dateFrom: [''],
      dateTo: [''],
      type: [''],
      number: [''],
      contractor: [''],
      customer: [''],
      amountFrom: [''],
      amountTo: [''],
      currency: [''],
      comment: ['']
    });
    this.loadDocuments();
  }
  loadDocuments() {
    this.data.getDocuments({
      page: this.currentPageNum,
      perPage: this.perPage,
      sortBy: this.sortBy,
      sortDirection: this.sortDirection
    }).subscribe((data: any) => {
      console.log(data);
      this.documents = data.documents.list;
      this.count = data.documents.count;
    });
    this.data.getAllCompanies().subscribe((res: any) => {
      this.companies = res.companies;
    });
    this.data.getAllCurrencies().subscribe((res: any) => {
      this.currencies = res.currencies;
    });
    this.data.getCodeTypes().subscribe((res: any) => {
      this.types = res.codeTypes;
    });
   }

   onChangePage(event: PageEvent): void {
     this.currentPageNum = event.pageIndex + 1;
     this.perPage = event.pageSize;
     this.loadDocuments();
     console.log(event);
   }

   setSort(fieldName) {
    this.sortBy = fieldName;
    this.sortDirection = this.sortDirection === 'ASC' ? 'DESC' : 'ASC';
    this.loadDocuments();
  }

   delDocument(id): void {
    const dialogRef = this.dialog.open( DialogComponent, {
      height: '150px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.data.delDocument(id).subscribe((res: any) => {
          this.loadDocuments();
          this.data.showAlert.next({type: 'success', message: 'Documents was deleted!'});
        });
     }
    });
   }

  ngOnInit() {
    this.searchForm.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(300)
    ).subscribe(() => {
      this.loadDocuments()
    });
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


