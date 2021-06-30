import { Component, OnInit } from '@angular/core';
import {WebRequestService} from "../web-request.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import {shareReplay, tap} from "rxjs/operators";
import {HttpResponse} from "@angular/common/http";
import {AuthService} from "../auth.service";

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

  constructor(private webReqService: WebRequestService, private auth: AuthService) {
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
    return this.webReqService.patch('api/user/' + this.auth.getUserId(), { voornaam, achternaam, email, wachtwoord } )
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
