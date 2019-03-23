import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service'
import { PageEvent } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.scss']
})
export class ContractorComponent implements OnInit {
  partners: Array<any> = new Array<any>();
  currentPageNum = 1;
  perPage = 10;
  count = 0;
  pageEvent: PageEvent;


  constructor(private data: DataService, public dialog: MatDialog) {
    this.loadPartners();
   }

   loadPartners() {
    // this.data.getPartners({
    //   page: this.currentPageNum,
    //   perPage: this.perPage,
    // }).subscribe((data: any) => {
    //   this.partners = data.partners.list;
    //   this.count = data.partners.count;
    // });
   }

   onChangePage(event: PageEvent): void {
     this.currentPageNum = event.pageIndex + 1;
     this.perPage = event.pageSize;
     this.loadPartners();
     console.log(event);
   }

   delPartner(id): void {
    // const dialogRef = this.dialog.open( DialogComponent, {
    //   height: '150px'
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.data.delPartner(id).subscribe((res: any) => {
    //       this.loadPartners();
    //       this.data.showAlert.next({type: 'success', message: 'Company was deleted!'});
    //     });
    //  }
    // });
   }

  ngOnInit() {
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
