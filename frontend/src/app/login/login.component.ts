import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLoginValues } from "../login-services/userLoginValues";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  loginUser(loginform: NgForm)
  {
    const loginValues = new UserLoginValues(loginform.value.uname, loginform.value.pwd)
    console.log(loginValues)
  }
}


