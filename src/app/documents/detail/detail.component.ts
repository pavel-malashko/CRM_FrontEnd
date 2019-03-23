import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'app/data-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  currentDocumentId = null;
  document: any = {};
  contractors: Array<any> = new Array<any>();
  customers: Array<any> = new Array<any>();
  currencies: Array<any> = new Array<any>();
  types: Array<any> = new Array<any>();
  constructor(private act: ActivatedRoute, public data: DataService) {
    this.act.params.subscribe((param) => {
      this.currentDocumentId = param.id;
      this.getDocument();
      this.loadData();
    });
   }
  getDocument() {
    this.data.getDocument(this.currentDocumentId).subscribe((res: any) => {
      this.document = res.document;
      console.log(res, this.document);
    });
  }
  loadData(): void {
    this.data.getAllCompanies().subscribe((res: any) => {
      console.log(res);
      this.contractors = res.companies;
      this.customers = res.companies;
    });
    this.data.getAllCurrencies().subscribe((res: any) => {
      console.log(res);
      this.currencies = res.currencies;
    });
    this.data.getDocumentTypes().subscribe((res: any) => {
      console.log(res);
      this.types = res;
    });
  }


  ngOnInit() {
  }

}
