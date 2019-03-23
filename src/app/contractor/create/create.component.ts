import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../../../app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;
  companies: Array<any> = new Array<any>();

  constructor(private fb: FormBuilder, private dataService: DataService, public router: Router) {
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
    this.loadCompanies();
  }


  create() {
    // console.log(this.createForm.value);
    // this.dataService.createParter(this.createForm.value).subscribe((res: any) => {
    //   console.log(res);
    //   this.router.navigate(['./contractors']);
    //   this.dataService.showAlert.next({type: 'success', message: 'Partner was created!'});
    // })
  }

  loadCompanies() {
    this.dataService.getAllCompanies().subscribe((res: any) => {
      console.log(res);
      this.companies = res.companies;
    });
  }

  ngOnInit() {
  }

}
