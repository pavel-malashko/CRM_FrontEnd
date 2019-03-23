import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { config } from './config'

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private serverUrl = config.serverUrl;
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public showAlert: BehaviorSubject<{type: string, message: string}> = new BehaviorSubject({type: '', message: ''});
  constructor(public router: Router, private http: HttpClient) {
    this.wathLogin();
  }

  wathLogin(): void {
    this.loggedIn.subscribe((loggedIn) => {
      if (!loggedIn && !localStorage.getItem('usrToken')) {
        this.router.navigate(['/login']);
      } else if (loggedIn && localStorage.getItem('usrToken')) {
        // this.configService.refreshConfig();
      }
    });
  }

  login(form) {
    this.http.post(this.serverUrl + '/login', form).subscribe((res: any) => {
      console.log(res);
      this.storeUserData(res);
      this.loggedIn.next(true);
      this.router.navigate(['./dashboard'])
    }, (err: any) => {
      if (err.error.status === 400) {
        this.showAlert.next({type: 'danger', message: 'Bad password or login!'});
      }
    })
  }

  getConfig() {
    return this.http.get(this.serverUrl);
  }

  isLoggedIn() {
    return this.loggedIn.getValue();
  }

  getToken() {
    return localStorage.getItem('usrToken');
  }

  storeUserData(data) {
    localStorage.setItem('usrToken', data.token);
    localStorage.setItem('usrData', JSON.stringify(data.user));
  }

  clearUserData() {
    localStorage.removeItem('usrToken');
    localStorage.removeItem('usrData');
    this.loggedIn.next(false);
  }


  logOut() {
    this.clearUserData();
    return this.http.get(this.serverUrl + '/logout');
  }
  getCompanies(data) {
    console.log(data);
    return this.http.get(this.serverUrl + '/companies?page=' + data.page + '&perPage=' + data.perPage);
  }

  getAllCompanies() {
    return this.http.get(this.serverUrl + '/companies-list');
  }
  getAllCurrencies() {
    return this.http.get(this.serverUrl + '/currencies');
  }

  getCompany(id) {
    return this.http.get(this.serverUrl + '/company/' + id);
  }

  createCompany(form) {
    return this.http.post(this.serverUrl + '/company/store', form);
  }

  updateCompany(companyId, form) {
    return this.http.post(this.serverUrl + '/company/update/' + companyId, form);
  }
  delCompany(id) {
    return this.http.post(this.serverUrl + '/company/destroy', {id: id});
  }




  // getPartners(data) {
  //   return this.http.get(this.serverUrl + '/contractors?page=' + data.page + '&perPage=' + data.perPage);
  // }

  // delPartner(id) {
  //   return this.http.post(this.serverUrl + '/contractors/destroy', {id: id});
  // }

  // createParter(form) {
  //   return this.http.post(this.serverUrl + '/contractors/store', form);
  // }
  // getPartner(id) {
  //   return this.http.get(this.serverUrl + '/contractors/' + id);
  // }

  // updatePartner(partnerId, form) {
  //   return this.http.post(this.serverUrl + '/contractors/update/' + partnerId, form);
  // }




  getBankAccounts(data) {
    return this.http.get(this.serverUrl + '/bank-accounts?page=' + data.page + '&perPage=' + data.perPage);
  }



  getDocuments(data) {
    return this.http.get(this.serverUrl + '/documents?page=' + data.page + '&perPage=' + data.perPage);
  }

  getDocument(id) {
    return this.http.get(this.serverUrl + '/document/' + id);
  }

  createDocument(form) {
    return this.http.post(this.serverUrl + '/document/store', form);
  }

  getDocumentTypes() {
    return this.http.get(this.serverUrl + '/document/types');
  }
  updateDocument(docId, form) {
    return this.http.post(this.serverUrl + '/document/update/' + docId, form);
  }
  delDocument(id) {
    return this.http.post(this.serverUrl + '/document/destroy', {id: id});
  }


  createBankAccount(form) {
    return this.http.post(this.serverUrl + '/bank-account/store', form);
  }
  updateBankAccount(bankId, form) {
    return this.http.post(this.serverUrl + '/bank-account/update/' + bankId, form);
  }
  getCodeTypes() {
    return this.http.get(this.serverUrl + '/bank-account/code-types');
  }
  delBankAccount(id) {
    return this.http.post(this.serverUrl + '/bank-account/destroy', {id: id});
  }


  getTransactions(data) {
    return this.http.post(this.serverUrl + '/transactions', data);
  }
  delTransaction(id) {
    return this.http.post(this.serverUrl + '/transaction/destroy', {id: id});
  }

  createTransaction(form) {
    return this.http.post(this.serverUrl + '/transaction/store', form);
  }
  getTransaction(id) {
    return this.http.get(this.serverUrl + '/transaction/' + id);
  }
  updateTransaction(transId, form) {
    return this.http.post(this.serverUrl + '/transaction/update/' + transId, form);
  }
 }
