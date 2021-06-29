import { Component, OnInit } from '@angular/core';
import {WebRequestService} from "../web-request.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-accountoverzicht',
  templateUrl: './accountoverzicht.component.html',
  styleUrls: ['./accountoverzicht.component.scss']
})
export class AccountoverzichtComponent implements OnInit {
  firstName: string;
  lastName: string
  mailAddress: string

  constructor(private webReqService: WebRequestService) {
    this.firstName = '';
    this.lastName = '';
    this.mailAddress = '';
  }

  helper = new JwtHelperService();

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
    console.log(voornaam, achternaam, email, wachtwoord);
  }

  // decode token for user id and return it
  getUserId() {
    const token = localStorage.getItem('token');
    // @ts-ignore
    const decodeToken = this.helper.decodeToken(token)
    return decodeToken._id // return user id
  }

}
