import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DataService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  transactions: any;
  currencies: any;
  constructor(private fb: FormBuilder, private dataService: DataService, public router: Router) {
    this.createForm = this.fb.group({
      date: [''],
      amount: [''],
      purpose: [''],
      currency: ['']
      }),
    this.loadCurrencies();
  }


  create() {
    console.log(this.createForm.value);
    this.dataService.createTransaction(this.createForm).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['./transactions']);
      this.dataService.showAlert.next({type: 'success', message: 'Transaction was created!'});
    },
    (err: any) => {
      console.log(err);
      if ( err.status === 400 ) {
        this.dataService.showAlert.next({type: 'danger', message: 'Transaction incorrectable format!'});
      };
    })
  }
  loadCurrencies(): void {
    this.dataService.getAllCurrencies().subscribe((res: any) => {
      this.currencies = res.currencies;
    });
  }
  ngOnInit() {
  }

}
