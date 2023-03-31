import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UniversalVariable } from '../universal.variable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, DoCheck{

  constructor(private http: HttpClient, private univar: UniversalVariable) {

  }
  ngDoCheck(): void {
    console.log(this.email);
  }
  ngOnInit(): void {
    
  }
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required])
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  geterrorMessageForPassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a value for password';
    }

    return this.password.hasError('email') ? 'Not a valid password' : '';
  }

  SubmitFormForValidation(): void {
    debugger;
    this.http.get<boolean>('https://localhost:5001/Login').subscribe((x:boolean) => {this.univar.isValidUserOrNot = x; console.log(this.univar.isValidUserOrNot); console.log(x)});
    //response.subscribe();
  }
}


