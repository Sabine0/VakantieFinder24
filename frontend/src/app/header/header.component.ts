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
    // if(!this.firstNamePulled) { // controlleert of de voornaam al eens is opgehaald
    //   const getUser = this.webReqService.get('api/user/' + this.auth.getUserId())
    //   getUser.subscribe((data: any) => {
    //     this.firstName = data.voornaam
    //     // this.firstNamePulled = true;
    //   })
    // // }
  }

  // check if user is logged in
  isUserLoggedIn() {
    return this.auth.isLoggedIn();
  }

  logOutUser() {
    this.auth.removeSession();
  }

}
