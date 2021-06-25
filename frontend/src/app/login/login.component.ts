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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLoginButtonClicked(email: string, wachtwoord: string){
    this.authService.login(email, wachtwoord).subscribe((res: HttpResponse<any>) => {
      if(res.status===200){
        this.router.navigate(['/']);
      }
      console.log(res);
    })
  }

}


