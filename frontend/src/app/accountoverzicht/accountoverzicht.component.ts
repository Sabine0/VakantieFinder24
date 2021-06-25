import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountoverzicht',
  templateUrl: './accountoverzicht.component.html',
  styleUrls: ['./accountoverzicht.component.scss']
})
export class AccountoverzichtComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLoginButtonClicked(voornaam: string, achternaam: string, email: string, wachtwoord: string){
    console.log(voornaam, achternaam, email, wachtwoord)
    //do something
  }
}
