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
  transactions: any = {};
  currentTransactionId = null;
  currencies: Array<any> = new Array<any>();
  constructor(private act: ActivatedRoute, private data: DataService, private fb: FormBuilder, public router: Router) {
    this.act.params.subscribe((param) => {
      this.currentTransactionId = param.id
      this.getTransaction();
      this.loadCurrencies();
    });
    this.createForm = this.fb.group({
      date: [''],
      amount: [''],
      purpose: [''],
      currency: ['']
      })
   }
   getTransaction() {
    this.data.getTransaction(this.currentTransactionId).subscribe((res: any) => {
      console.log(res);
      this.transactions = res.transaction;
      console.log(this.transactions);
      this.transactions.date = new Date(this.transactions.date);
      this.transactions.currency = this.transactions.currency.id;
      this.createForm.patchValue(this.transactions);
    })};

    loadCurrencies(): void {
      this.data.getAllCurrencies().subscribe((res: any) => {
        this.currencies = res.currencies;
      });
    }
    updateTransaction() {
      this.data.updateTransaction(this.currentTransactionId, this.createForm.value).subscribe((res: any) => {
        this.data.showAlert.next({type: 'success', message: 'Transaction successfully updated!'});
        this.router.navigate(['./transactions']);
      },
      (err: any) => {
        if ( err.error.code === 400 ) {
          this.data.showAlert.next({type: 'danger', message: 'Transaction incorrectable format!'});
        };
      });
    }
  ngOnInit() {
  }

}
