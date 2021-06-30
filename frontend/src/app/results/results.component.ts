import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  winner: string = "br";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.winner.subscribe(winner => {
      let winnerDiv = <HTMLInputElement>document.getElementById("winner");
      winnerDiv.innerHTML = winner;
    });
  }

}
