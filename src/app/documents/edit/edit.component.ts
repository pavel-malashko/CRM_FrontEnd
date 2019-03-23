import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'app/data-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  createForm: FormGroup;
  document: any = {};
  openFile: Array<any> = new Array<any>();
  currentDocumentId = null;
  contractors: Array<any> = new Array<any>();
  customers: Array<any> = new Array<any>();
  currencies: Array<any> = new Array<any>();
  types: Array<any> = new Array<any>();
  constructor(private act: ActivatedRoute, private data: DataService, private fb: FormBuilder, public router: Router) {
    this.act.params.subscribe((param) => {
      this.currentDocumentId = param.id
      this.getDocument();
      this.getData();
    });

    this.createForm = this.fb.group({
      number: ['', Validators.required],
      comment: [''],
      amount: [''],
      date: ['', Validators.required],
      type: [''],
      contractor: ['', Validators.required],
      customer: ['', Validators.required],
      currency: ['']
    });
  }

  getDocument() {
    this.data.getDocument(this.currentDocumentId).subscribe((res: any) => {
      console.log(res);
      this.document = res.document;
      console.log(this.document);
      this.document.date = new Date(this.document.date);
      this.createForm.patchValue(this.document);
    })};
    getData() {
      this.data.getAllCompanies().subscribe((res: any) => {
        this.contractors = res.companies;
        this.customers = res.companies;
      });
      this.data.getAllCurrencies().subscribe((res: any) => {
        this.currencies = res.currencies;
      });
      this.data.getDocumentTypes().subscribe((res: any) => {
        this.types = res;
      });
    // this.data.getCompany({
    //     id:  this.act.params.subscribe((param)=>param.id),
    //   })
  }
  updateDocument() {
    this.data.updateDocument(this.currentDocumentId, this.createForm.value).subscribe((res: any) => {
      this.data.showAlert.next({type: 'success', message: 'Document successfully updated!'});
      this.router.navigate(['./documents']);
    },
    (err: any) => {
      if ( err.error.code === 400 ) {
        this.data.showAlert.next({type: 'danger', message: 'Document incorrectable format!'});
      };
    });
  }
  ngOnInit() {
  }

  fileInputChange(event) {
    this.openFile = event.target.files;
    console.log(this.openFile);
  }

}
