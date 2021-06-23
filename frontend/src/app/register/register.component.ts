import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserRegisterValues} from "../login-services/userRegisterValues";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{

  async registerUser(registerform: NgForm)
  {
    const registerValues = new UserRegisterValues(registerform.value.firstName,
      registerform.value.lastName, registerform.value.email, registerform.value.pwd, registerform.value.pwd2)

    // all values in form
    let firstName = registerform.value.firstName;
    let lastName =  registerform.value.lastName;
    let email =  registerform.value.email;
    let pwd =  registerform.value.pwd;
    let pwd2 =  registerform.value.pwd2;

    if (pwd != pwd2)
    {
      console.log("wachtwoorden komen niet overeen")
    }

    // if all fields are not empty, send values to api
    if (firstName != undefined &&
      lastName != undefined &&
      email != undefined) {

      console.log("zou moeten werken")
      await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName, lastName, email, pwd, pwd2
        })
      }).then((res) => res.json)
    }

    console.log(registerValues)
  }

}
