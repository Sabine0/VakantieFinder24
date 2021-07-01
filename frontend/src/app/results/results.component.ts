import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {WebRequestService} from "../web-request.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  winner: string = "oops something went wrong";

  constructor(private dataService: DataService, private webService: WebRequestService) { }

  ngOnInit(): void {
    this.dataService.winner.subscribe(winner => {
      this.winner = winner;
    });
    let winnerDiv = <HTMLInputElement>document.getElementById("winner");
    winnerDiv.innerHTML = this.winner;

    let url : string = "api/contenders/" + this.winner;
    this.webService.get(url).subscribe( (data: any )=> {

      for (let i = 0; i < data["fotos"].length; i++){
        let element = <HTMLInputElement>document.getElementById("pic"+ i);
        element.setAttribute("src", data["fotos"][i]);
        console.log(data["fotos"][i]);
      }
      })

  }

}
