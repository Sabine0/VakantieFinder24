import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  wrongCredentials : boolean;

  constructor(private authService: AuthService, private router: Router) { this.wrongCredentials = false }

  ngOnInit() {
  }

  onLoginButtonClicked(email: string, wachtwoord: string){
    this.wrongCredentials = true;
    this.authService.login(String(email).toLowerCase(), String(wachtwoord).toLowerCase()).subscribe((res: HttpResponse<any>) => {
      if(res.status===200){
        this.router.navigate(['/']);
      }
    })
  }
}


