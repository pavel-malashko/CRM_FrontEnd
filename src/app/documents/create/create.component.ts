import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DataService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  documents: Array<any> = new Array<any>();
  types: Array<any> = new Array<any>();
  openFile: any;
  formData: FormData = new FormData();
  contractors: Array<any> = new Array<any>();
  customers: Array<any> = new Array<any>();
  currencies: Array<any> = new Array<any>();

  constructor(private fb: FormBuilder, private dataService: DataService, public router: Router) {
    this.createForm = this.fb.group({
      number: ['', Validators.required],
      comment: [''],
      amount: [''],
      date: ['', Validators.required],
      type: [''],
      contractor: ['', Validators.required],
      customer: ['', Validators.required],
      currency: ['']
      }),
    this.loadData();
  }

  create() {
    console.log(this.createForm.value);
    for (const key in this.createForm.value) {
      if (key) {
        this.formData.append(key, this.createForm.value[key]);
      }
    }
    this.dataService.createDocument(this.formData).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['./documents']);
      this.dataService.showAlert.next({type: 'success', message: 'Documents was created!'});
    },
    (err: any) => {
      console.log(err);
      if ( err.status === 400 ) {
        this.dataService.showAlert.next({type: 'danger', message: 'Document incorrectable format!'});
      };
    })
  }
  fileInputChange(event) {
    this.openFile = event.target.files;
    if (event.target.files[0]) {
      console.log(event.target.files);
      this.formData.append('file', event.target.files[0], event.target.files[0].name);
    }
  }
  loadData(): void {
    this.dataService.getAllCompanies().subscribe((res: any) => {
      this.contractors = res.companies;
      this.customers = res.companies;
    });
    this.dataService.getAllCurrencies().subscribe((res: any) => {
      this.currencies = res.currencies;
    });
    this.dataService.getDocumentTypes().subscribe((res: any) => {
      this.types = res;
    });
  }

  ngOnInit() {
  }

}
