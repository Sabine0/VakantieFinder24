import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //hobbies
  private hobbiesSource : BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  hobbies = this.hobbiesSource.asObservable();

  //winner
  private winnerSource = new BehaviorSubject<string>("");
  winner = this.winnerSource.asObservable();

  constructor() { }

  setHobbies(hobbies: string[]):void{
    this.hobbiesSource.next(hobbies);
    console.log("dataService updated hobbies : " + hobbies);
  }

  setWinner(winner: string):void{
    this.winnerSource.next(winner);
    console.log("dataService updated winner : " + winner);
  }
}
