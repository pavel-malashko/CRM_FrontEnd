import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'app/data-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  createForm: FormGroup;
  companies: Array<any> = new Array<any>();
  partner: any = {};
  currentPartnerId = null;

  constructor(private act: ActivatedRoute, private data: DataService, private fb: FormBuilder, public router: Router) {
    this.act.params.subscribe((param) => {
      this.currentPartnerId = param.id
      this.getPartner();
    });

    this.createForm = this.fb.group({
      name: ['', Validators.required],
      company: [''],
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
        comment: ['']
      }),
    });
    console.log(this.companies, this.createForm);
  }

  getPartner() {
    // this.data.getPartner(this.currentPartnerId).subscribe((res: any) => {
    //   this.partner = res.partner;
    //   this.companies = res.companies;
    //   this.createForm.patchValue(this.partner);
    // });
    // this.data.getCompany({
    //     id:  this.act.params.subscribe((param)=>param.id),
    //   })
  }

  ngOnInit() {
  }

  updatePartner() {
    // this.data.updatePartner(this.currentPartnerId, this.createForm.value).subscribe((res: any) => {
    //   this.data.showAlert.next({type: 'success', message: 'Partner successfully updated!'});
    //   this.router.navigate(['./contractors']);
    // });
  }
}
