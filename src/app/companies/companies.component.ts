import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service'
import {PageEvent} from '@angular/material';
import {MatDialog, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies: Array<any> = new Array<any>();
  currentPageNum = 1;
  perPage = 10;
  count = 0;
  pageEvent: PageEvent;
  searchForm: FormGroup;
  sortBy = 'id';
  sortDirection: 'ASC' | 'DESC' = 'ASC';
  constructor(private data: DataService, public dialog: MatDialog, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      bankName: [''],
      country: [''],
      regNumber: [''],
    });
    this.loadCompanies();
  }

  ngOnInit() {
    this.searchForm.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(300)
    ).subscribe(() => {
      this.loadCompanies()
    });
  }

   loadCompanies() {
    this.data.getCompanies({
      page: this.currentPageNum,
      perPage: this.perPage,
      sortBy: this.sortBy,
      sortDirection: this.sortDirection
    }).subscribe((data: any) => {
      console.log(data);
      this.companies = data.companies.list;
      this.count = data.companies.count;
    });
   }

   onChangePage(event: PageEvent) {
     this.currentPageNum = event.pageIndex + 1;
     this.perPage = event.pageSize;
     this.loadCompanies();
     console.log(event);
   }

   setSort(fieldName) {
    this.sortBy = fieldName;
    this.sortDirection = this.sortDirection === 'ASC' ? 'DESC' : 'ASC';
    this.loadCompanies();
  }

   delCompany(id) {
    const dialogRef = this.dialog.open( DialogComponent, {
      height: '150px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.data.delCompany(id).subscribe((res: any) => {
          this.loadCompanies();
          this.data.showAlert.next({type: 'success', message: 'Company was deleted!'});
        });
     }
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
