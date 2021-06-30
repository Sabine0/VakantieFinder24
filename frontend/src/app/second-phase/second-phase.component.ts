import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {WebRequestService} from "../web-request.service";
import {DataService} from "../data.service";


@Component({
  selector: 'app-second-phase',
  templateUrl: './second-phase.component.html',
  styleUrls: ['./second-phase.component.scss']
})
export class SecondPhaseComponent implements OnInit {
  private winner: any = "Unknown";
  private userHobbys: string[] = [];
  private topTenContenders: any[]= [];

  constructor(private router: Router, private webResSevice: WebRequestService, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.hobbies.subscribe( userHobbies => this.userHobbys = userHobbies);

    let allContenders: any;
    this.webResSevice.get("api/contenders").subscribe((data: any) => {
      allContenders = data;
      let citysWithNoHobbyMatched : any[] = []; // this will be used of there are less then 10 citys that match the hobbys
      //maybe this will be a method
      // vind de hobbys met meeste overeenkommsten en die insterten en een array.
      for (let contender in allContenders) {
        let numberOfMatchedHobbys = 0;
        for (let hobby in this.userHobbys) {  // users hobby
          if (allContenders[contender]["interesses"].indexOf(this.userHobbys[hobby]) > -1){ // if there is there one or more hobby match
            numberOfMatchedHobbys++;
            allContenders[contender]["numberOfMatchedHobbys"] = numberOfMatchedHobbys;  // adding the matched hobbys element to the object
          }
        }
        if (numberOfMatchedHobbys == 0){
          allContenders[contender]["numberOfMatchedHobbys"] = numberOfMatchedHobbys;
          citysWithNoHobbyMatched.push(allContenders[contender]);
        }


        if (this.topTenContenders.length < 10 && allContenders[contender].numberOfMatchedHobbys > 0){    // if there is a place free and the there is at least one machted hobby
          this.topTenContenders.push(allContenders[contender]);

        }else {     // if there is no place free in the top 10 then replace the lowest value with a higher value
          this.topTenContenders.sort(function (a, b) {
            return a.numberOfMatchedHobbys - b.numberOfMatchedHobbys;
          });
         // console.log(this.topTenContenders);

          this.topTenContenders.shift();
          this.topTenContenders.push(allContenders[contender]);
        }
      }
      if (this.topTenContenders.length < 10){ // if there are less then 10 cities with matched hobbies there will be random cities in the quiz
        for (let i = 0; i < 10; i++){
          this.topTenContenders.push(citysWithNoHobbyMatched.pop());
        }
      }
      this.changePick("right");
      this.changePick("left");

      } );



  }


  // if the user clicks on one of the buttons
  nextCity(event: any) {
    let side: string;
    if (event.target.getAttribute("side").valueOf() == "right") {
      side = "left";
    } else {
      side = "right"
    }
    this.changePick(side);
  }
  changePick(side: string) {
    //json omzetten in array

    if (this.topTenContenders.length > 0) {
      let newCity = this.topTenContenders.pop();
      console.log(this.topTenContenders);
      for (let i = 0; i < newCity["fotos"].length; i++) {

        let attName = side + "Pic" + i; // creating the attribute name to manipulate the dom

        let pic = (<HTMLInputElement>document.getElementById(attName));
        pic.setAttribute("src", newCity["fotos"][i]);
        // adding the current city name to container to be able to find the winner later
        let container = <HTMLInputElement>document.getElementById(side+"Container");
          container.setAttribute("cityName", newCity["plaatsnaam"]);
        //console.log(arrCityPics[this.stateNum][i]);
      }

    }else{
      if (side == "left") {
        let temp: any=  <HTMLInputElement>document.getElementById( "rightContainer");
        this.winner = temp.getAttribute("cityName").valueOf();
        this.dataService.setWinner(this.winner);
        console.log(this.winner);
        this.router.navigate(['/', 'results']);
      }else{
        let temp: any=  <HTMLInputElement>document.getElementById( "leftContainer");
        this.winner = temp.getAttribute("cityName").valueOf();
        this.dataService.setWinner(this.winner);
        console.log(this.winner);
        this.router.navigate(['/', 'results']);
      }
    }
  }
}
