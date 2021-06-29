import { Injectable } from '@angular/core';
import {WebRequestService} from "./web-request.service";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {shareReplay, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private webReqService: WebRequestService) { }

  login(email: string, wachtwoord: string){
    return this.webReqService.login(email, wachtwoord).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        this.setSession(res.body.token);
        console.log('Logged in successfully!');
      })
    );
  }

  register(voornaam: string, achternaam: string, email: string, wachtwoord: string){
    return this.webReqService.register(voornaam, achternaam, email, wachtwoord).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        this.setSession(res.body.token);
        console.log('Successfully signed up and now logged in!');
      })
    );
  }

  setSession(token: string){
    // localStorage.setItem('user-id', userId);
    localStorage.setItem('token', token);
  }

  // use later
  removeSession(){
    // localStorage.removeItem('user-id');
    localStorage.removeItem('token');
  }

  // check if user is logged in
  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }
}
