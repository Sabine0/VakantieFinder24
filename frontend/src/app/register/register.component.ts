import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegisterButtonClicked(voornaam: string, achternaam: string, email: string, wachtwoord: string, wachtwoord2: string) {
    if (wachtwoord === wachtwoord2) {
      this.authService.register(voornaam, achternaam, email, wachtwoord).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.router.navigate(['/']);
      });
    }
  }

}
