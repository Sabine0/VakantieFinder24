import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-first-phase',
  templateUrl: './first-phase.component.html',
  styleUrls: ['./first-phase.component.scss']
})
export class FirstPhaseComponent implements OnInit {
  private selectedHobbies: string[] = []

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  selectHobby(event: any): void{
    let img =  event.target;

    if(img.className == "notSelected") {
      img.className = "selected";
      this.selectedHobbies.push(img.getAttribute("hobbyName"));
      this.dataservice.setHobbies(this.selectedHobbies);
    //  console.log(this.selectedHobbies)
    }else{
      img.className = "notSelected";
      this.deleteSelectedHobby(img.getAttribute("hobbyName"));
      this.dataservice.setHobbies(this.selectedHobbies);
    }
  }

  deleteSelectedHobby(hobbyName: string):void{
    this.selectedHobbies.forEach((value,index)=>{
      if(value==hobbyName) this.selectedHobbies.splice(index,1);
    });
  //  console.log(this.selectedHobbys);
  }

  ceck(event : any){
    if (this.selectedHobbies.length >= 2){
      this.router.navigate(['/', 'second-phase']);
    }else{
      alert("Selecteer minimaal 2 interesses");
    }

    //routerLinkActive="selected"
  }

}
