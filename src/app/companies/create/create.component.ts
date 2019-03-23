import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService, public router: Router) {
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


  create(): void {
    console.log(this.createForm.value);
    this.dataService.createCompany(this.createForm.value).subscribe((res: any) => {
      console.log(res);
      this.dataService.showAlert.next({type: 'success', message: 'Company was created!'});
      this.router.navigate(['./companies']);
    })
  }


  ngOnInit() {
  }

}
