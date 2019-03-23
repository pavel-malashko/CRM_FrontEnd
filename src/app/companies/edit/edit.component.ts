import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DataService } from '../../data-service.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  name: string;
  requisites: string;
  contractor: string;
  bank: string;
  createForm: FormGroup;
  company: any = {};
  currentCompanyId = null;

  constructor(private act: ActivatedRoute, private data: DataService, private fb: FormBuilder, public router: Router) {
    this.act.params.subscribe((param) => {
      this.currentCompanyId = param.id
      this.getCompany();
    });
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      requisites: this.fb.group({
        regNumber: ['', Validators.required],
        tinNumber: [''],
        vatNumber: [''],
        address: this.fb.group({
          country: [''],
          city: [''],
          street: [''],
          building: [''],
          apt: [''],
          zip: [''],
        }),
        inner: [''],
        comment: ['']
      }),
    });
  }
  getCompany() {
    this.data.getCompany(this.currentCompanyId).subscribe((res: any) =>{
      console.log(res);
      this.company = res.company;
      this.createForm.patchValue(this.company);
    });
  }


  ngOnInit() {
  }

  updateCompany() {
    this.data.updateCompany(this.currentCompanyId, this.createForm.value).subscribe((res: any) => {
      console.log(res);
      this.data.showAlert.next({type: 'success', message: 'Company successfully updated!'});
      this.router.navigate(['./companies']);
    });
  }
}
