import { Injectable } from '@angular/core';
import {WebRequestService} from "./web-request.service";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {shareReplay, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private webReqService: WebRequestService, private http: HttpClient) { }

  login(email: string, wachtwoord: string){
    return this.webReqService.login(email, wachtwoord).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        // the auth tokens will be in the header of this response
        this.setSession(res.body._id, <string>res.headers.get('token'));
        console.log('Logged in successfully!');
      })
    );
  }

  register(voornaam: string, achternaam: string, email: string, wachtwoord: string){
    return this.webReqService.register(voornaam, achternaam, email, wachtwoord).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        // the auth tokens will be in the header of this response
        this.setSession(res.body._id, <string>res.headers.get('token'));
        console.log('Successfully signed up and now logged in!');
      })
    );
  }

  setSession(userId: string, token: string){
    localStorage.setItem('user-id', userId);
    localStorage.setItem('token', token);
  }

  removeSession(){
    localStorage.removeItem('user-id');
    localStorage.removeItem('token');
  }
}
