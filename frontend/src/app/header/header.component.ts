import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import {WebRequestService} from "../web-request.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  firstName : string
  // firstNamePulled : boolean // deze boolean dient als controle of de voornaam al is opgehaald

  constructor(private webReqService: WebRequestService, private auth: AuthService) { this.firstName = ''; }

  ngOnInit(): void {
  }

  // check if user is logged in
  isUserLoggedIn() {
    return this.auth.isLoggedIn();
  }

  logOutUser() {
    this.auth.removeSession();
  }

}
