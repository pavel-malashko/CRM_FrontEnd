import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data-service.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/transactions', title: 'Transactions',  icon: 'monetization_on', class: '' },
    { path: '/companies', title: 'Companies',  icon: 'domain', class: '' },
    // { path: '/contractors', title: 'Partners',  icon: 'notifications', class: '' },
    { path: '/documents', title: 'Documents',  icon: 'insert_drive_file', class: '' },
    { path: '/bank-accounts', title: 'Bank Accounts',  icon: 'account_balance', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  logOut() {
    this.data.logOut();
  }
}
