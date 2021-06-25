import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  get(uri: string){
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: object){
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: string, payload: object){
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string){
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }

  login(email: string, wachtwoord: string){
    return this.http.post(`${this.ROOT_URL}/api/login`, {
      email,
      wachtwoord
    }, {
      observe: 'response'
    });
  }

  register(voornaam: string, achternaam: string, email: string, wachtwoord: string){
    return this.http.post(`${this.ROOT_URL}/api/register`, {
      voornaam,
      achternaam,
      email,
      wachtwoord
    },{
      observe: 'response'
    });
  }

}
