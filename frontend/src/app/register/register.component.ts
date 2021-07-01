import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {HttpResponse} from "@angular/common/http";
import {WebRequestService} from "../web-request.service";
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit{

  email : string = ''

  voornaamNietCorrect : boolean = false
  voornaamMelding : string = ''

  achternaamNietcorrect : boolean = false
  achternaamMelding : string = ''

  emailNietCorrect : boolean = false
  emailMelding : string = ''

  wachtwoordenNietCorrect : boolean = false
  wachtwoordMelding : string = ''

  constructor(private webRequestService: WebRequestService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegisterButtonClicked(voornaam: string, achternaam: string, email: string, wachtwoord: string, wachtwoord2: string) {

    // Voornaam validatie
    if (voornaam.length <= 2) {
      this.voornaamNietCorrect = true;
      this.voornaamMelding = "Voornaam moet minimaal 3 characters bevatten"
    }

    if (voornaam.length > 25) {
      this.voornaamNietCorrect = true;
      this.voornaamMelding = "Voornaam mag maximaal 25 characters bevatten"
    }

    // Achternaam validatie
    if (achternaam.length <= 2) {
      this.achternaamNietcorrect = true;
      this.achternaamMelding = "Achternaam moet minimaal 3 characters bevatten"
    }

    if (achternaam.length > 25) {
      this.achternaamNietcorrect = true;
      this.achternaamMelding = "Achternaam mag maximaal 25 characters bevatten"
    }

    // Email validatie
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailIsValid = regularExpression.test(String(email).toLowerCase());
    if (!emailIsValid){
        this.emailNietCorrect = true;
        this.emailMelding = "Controlleer of de E-mail goed geschreven is "
    }

    // Wachtwoorden validatie
    if (wachtwoord.length <= 4) {
      this.wachtwoordenNietCorrect = true;
      this.wachtwoordMelding = "Wachtwoorden moeten minimaal 5 characters lang zijn";
    }

    if (wachtwoord !== wachtwoord2) {
      this.wachtwoordenNietCorrect = true;
      this.wachtwoordMelding = "Wachtwoorden komen niet overeen!";
    }

    // als all velden goed zijn gekeurd worden de waarden naar de backend gestuurd
    if (!this.voornaamNietCorrect && !this.achternaamNietcorrect && !this.emailNietCorrect && !this.wachtwoordenNietCorrect) {

      this.auth.register(String(voornaam).toLowerCase(), String(achternaam).toLowerCase(), String(email).toLowerCase(), wachtwoord).subscribe((res: HttpResponse<any>) => {
        if (res.status===200) {
          this.router.navigate(['/']);
        }
      });
    }
  }

}
