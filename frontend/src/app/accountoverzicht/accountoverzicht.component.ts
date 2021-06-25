import { Component, OnInit } from '@angular/core';
import {WebRequestService} from "../web-request.service";

@Component({
  selector: 'app-accountoverzicht',
  templateUrl: './accountoverzicht.component.html',
  styleUrls: ['./accountoverzicht.component.scss']
})
export class AccountoverzichtComponent implements OnInit {

  constructor(private webReqService: WebRequestService) { }

  ngOnInit(): void {
  }

  // TODO: add methods for changing user info
  onLoginButtonClicked(voornaam: string, achternaam: string, email: string, wachtwoord: string){
    console.log(voornaam, achternaam, email, wachtwoord);

    //do something
  }

  // TODO: add methods for getting user info

  // getVoornaam(){
  //   // return this.webReqService.get('');
  //   // to be continued
  // }

}
