import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataService } from '../data-service.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  location:any;
  valid:boolean=false;
  email = new FormControl('');
  password = new FormControl('');
  loginForm: FormGroup;
  passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private fb: FormBuilder,
    public dataService: DataService
  ) {
    this.dataService.clearUserData();
   this.location = this.router.url;
   this.loginForm = this.fb.group({
     email: ['', [ Validators.required, Validators.email]],
     password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordRegex)]],
    });
  }

  ngOnInit() {
  }

  login(form) {
    this.dataService.login(form);
  }

}
