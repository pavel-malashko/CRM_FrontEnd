import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataService } from 'app/data-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  currentCompanyId = null;
  company: any = {};
  bankAccounts: any;
  accountForm: FormGroup;
  editAccountForm: FormGroup;
  showForm = false;
  formValue: any ;
  types: any;
  // codes = [{name: 'bic'}, {name: 'code'}, {name: 'swift'}];
  currentEditBankAccount: any = {};

  constructor(private act: ActivatedRoute, public data: DataService, private fb: FormBuilder) {
    this.act.params.subscribe((param) => {
      this.currentCompanyId = param.id
      this.getCompany();
    });
    this.getCodeTypes();
    this.accountForm = this.fb.group({
      bankName: ['', Validators.required],
      codeType: ['', Validators.required],
      code: [''],
      comment: [''],
      iban: ['']
    });

    this.editAccountForm = this.fb.group({
      bankName: ['', Validators.required],
      codeType: ['', Validators.required],
      code: [''],
      comment: [''],
      iban: ['']
    });
   }
   getCompany() {
    this.data.getCompany(this.currentCompanyId).subscribe((res: any) => {
      this.company = res.company;
      this.bankAccounts = res.company.bankAccounts;
      console.log(res);
    });
  }
  getCodeTypes() {
    this.data.getCodeTypes().subscribe((res: any) => {
      this.types = res.codeTypes;
    });
  }
  ngOnInit() {
  }

  showAddAccountForm() {
    this.showForm = true;
  }
  saveAccountForm() {
    this.showForm = false;
    this.formValue = this.accountForm.value;
    this.formValue.company = this.company.id;
    console.log(this.formValue);
    this.data.createBankAccount(this.formValue).subscribe((res: any) => {
      console.log(res);
      this.bankAccounts.unshift(res.bankAccount);
    });
  }

  editBankAccount(accout) {
    this.currentEditBankAccount = accout;
    this.editAccountForm.patchValue(accout);
  }

  hideAccountForm() {
    this.showForm = false;
    this.accountForm.reset();
  }
  updateBankAccount() {
    this.data.updateBankAccount(this.currentEditBankAccount.id , this.editAccountForm.value).subscribe((res: any) => {
      console.log(res);
      this.currentEditBankAccount = {};
      this.data.showAlert.next({type: 'success', message: 'Bank account successfully updated!'});
      this.getCompany();
      this.editAccountForm.reset();
    });
  }
  delBankAccount(id) {
    this.data.delBankAccount(id).subscribe((res: any) => {
      this.getCompany();
      this.data.showAlert.next({type: 'success', message: 'Bank Account was deleted!'});
    });
  }
}
