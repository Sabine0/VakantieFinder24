import { Component, OnInit } from '@angular/core';
import {WebRequestService} from "../web-request.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import {shareReplay, tap} from "rxjs/operators";
import {HttpResponse} from "@angular/common/http";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-accountoverzicht',
  templateUrl: './accountoverzicht.component.html',
  styleUrls: ['./accountoverzicht.component.scss']
})
export class AccountoverzichtComponent implements OnInit {
  firstName: string;
  lastName: string
  mailAddress: string
  infoshown: boolean = true
  resultsshown: boolean = false

  email : string = 'adadada'

  voornaamNietCorrect : boolean = false
  voornaamMelding : string = ''

  achternaamNietcorrect : boolean = false
  achternaamMelding : string = ''

  emailNietCorrect : boolean = false
  emailMelding : string = ''

  wachtwoordNietCorrect : boolean = false
  wachtwoordMelding : string = ''

  constructor(private webReqService: WebRequestService, private auth: AuthService, private router: Router) {
    this.firstName = '';
    this.lastName = '';
    this.mailAddress = '';
  }

  helper = new JwtHelperService(); // helpt ons om de token te decoden

  ngOnInit(): void {
    const getUser = this.webReqService.get('api/user/' + this.getUserId())
    getUser.subscribe((data : any) => {
      this.firstName = data.voornaam
      this.lastName = data.achternaam
      this.mailAddress = data.email
    })

  }

  // TODO: add methods for changing user info
  onChangeInfoClicked(voornaam: string, achternaam: string, email: string, wachtwoord: string){
    // Voornaam validatie
    if (voornaam.length <= 2) {
      this.voornaamNietCorrect = true;
      this.voornaamMelding = "Voornaam moet minimaal 3 characters bevatten"
    }
    else if (voornaam.length > 25) {
      this.voornaamNietCorrect = true;
      this.voornaamMelding = "Voornaam mag maximaal 25 characters bevatten"
    }
    else {
      this.voornaamNietCorrect = false;
    }

    // Achternaam validatie
    if (achternaam.length <= 2) {
      this.achternaamNietcorrect = true;
      this.achternaamMelding = "Achternaam moet minimaal 3 characters bevatten"
    }
    else if (achternaam.length > 25) {
      this.achternaamNietcorrect = true;
      this.achternaamMelding = "Achternaam mag maximaal 25 characters bevatten"
    }
    else {
      this.achternaamNietcorrect = false;
    }

    // Email validatie
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailIsValid = regularExpression.test(String(email).toLowerCase());
    if (!emailIsValid){
      this.emailNietCorrect = true;
      this.emailMelding = "Controlleer of de E-mail goed geschreven is "
    } else {
      this.emailNietCorrect = false;
    }

    // Wachtwoord validatie
    if (wachtwoord.length <= 4) {
      this.wachtwoordNietCorrect = true;
      this.wachtwoordMelding = "Wachtwoord moet minimaal 5 characters lang zijn";
    } else {
      this.wachtwoordNietCorrect = false;
    }

    // als all velden goed zijn gekeurd worden de waarden naar de backend gestuurd
    if (!this.voornaamNietCorrect && !this.achternaamNietcorrect && !this.emailNietCorrect && !this.wachtwoordNietCorrect) {
      this.webReqService.patch('api/user/' + this.auth.getUserId(), { voornaam, achternaam, email, wachtwoord } )
      this.router.navigate(['/']);
    }
  }

  // decode token for user id and return it
  getUserId() {
    const token = localStorage.getItem('token');
    // @ts-ignore
    const decodeToken = this.helper.decodeToken(token)
    return decodeToken._id // return user id
  }

  showInfo(){
    this.infoshown = true;
    this.resultsshown = false;
  }

  showResults(){
    this.infoshown = false;
    this.resultsshown = true;
  }
}
