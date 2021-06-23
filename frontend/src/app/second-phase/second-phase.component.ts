import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-phase',
  templateUrl: './second-phase.component.html',
  styleUrls: ['./second-phase.component.scss']
})
export class SecondPhaseComponent implements OnInit {

  private phaseTwoIndex: number = 0; // om bij te houden of er 10 stappen zijn geweest
  private stateNum: number = 0;   // om de index binnen de json bij te houden
  private cityPics : Object = {
    "amsterdam": ["https://cdn.pixabay.com/photo/2020/07/24/03/36/houses-5432876_960_720.jpg",
                  "https://cdn.pixabay.com/photo/2019/05/26/18/27/bridge-4230946_960_720.jpg,",
                  "https://cdn.pixabay.com/photo/2019/08/06/11/58/boat-4388160_960_720.jpg",
                  "https://cdn.pixabay.com/photo/2019/03/25/15/25/travel-4080508_960_720.jpg",
                  "https://cdn.pixabay.com/photo/2020/08/14/15/22/canal-5488271_960_720.jpg",
                  "https://cdn.pixabay.com/photo/2021/02/11/07/57/amsterdam-6004539__340.jpg",
                  "https://cdn.pixabay.com/photo/2012/10/10/10/49/dam-square-60599__480.jpg",
                  "https://cdn.pixabay.com/photo/2017/08/19/16/09/canal-2659062_960_720.jpg",
                  "https://cdn.pixabay.com/photo/2016/11/01/12/57/amsterdam-1788167__340.jpg",
                  "https://cdn.pixabay.com/photo/2020/08/10/01/12/canal-5476717__340.jpg"
    ],
    "groningen": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZgd0uLDEsVQRJseh_jvBOKJKfCvuSYFoCA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCecpJDmEBHtH2opGKkSpwYu023lscfOzb6g&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRab33oLEC4KS3ST4sAVsnGDHFn6M8tdzo6pA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuNkA9g3Kx01UJjP-u08K2Yf1euS5Ad72Tcg&usqp=CAU",
      "https://images.unsplash.com/photo-1555238920-7a6bea18473b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
      "https://images.unsplash.com/photo-1618043704530-04afe939c583?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyb25pbmdlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1608377638763-c0e71041a67d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGdyb25pbmdlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1608377638763-c0e71041a67d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGdyb25pbmdlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1612655535852-fb9f2691c5a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGdyb25pbmdlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://media1.hotels.nl/r/main-carousel/hotels/source/1545-1.jpg"
    ]
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nextCity(event: any){
    let side: string ;
    if (event.target.getAttribute("side").valueOf() == "right") {
      side = "left";
    }else{
      side = "right"
    }
    //json omzetten in array
    let arrCityPics = Object.values(this.cityPics);

      for (let i = 0; i < arrCityPics[this.stateNum].length; i++){

        let attName = side + "Pic" + i; // creating the attribute name to manipulate the dom

        let pic = (<HTMLInputElement>document.getElementById(attName));
        pic.setAttribute("src", arrCityPics[this.stateNum][i]);
        //console.log(arrCityPics[this.stateNum][i]);
     }
      if (this.stateNum == arrCityPics.length - 1) {
        this.stateNum = 0;
        this.phaseTwoIndex++;
      }else{
        this.stateNum++;
        this.phaseTwoIndex++;
      }

      if (this.phaseTwoIndex == 10){
        this.router.navigate(['/', 'results']);
      }
  }

}
