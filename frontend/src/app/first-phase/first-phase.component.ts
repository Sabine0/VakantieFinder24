import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-first-phase',
  templateUrl: './first-phase.component.html',
  styleUrls: ['./first-phase.component.scss']
})
export class FirstPhaseComponent implements OnInit {
  private selectedHobbys: string[] = []

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
  }

  selectHobby(event: any): void{
    let img =  event.target;

    if(img.className == "notSelected") {
      img.className = "selected";
      this.selectedHobbys.push(img.getAttribute("hobbyName"));
      this.dataservice.setHobbies(this.selectedHobbys);
      console.log(this.selectedHobbys)
    }else{
      img.className = "notSelected";
      this.deleteSelectedHobby(img.getAttribute("hobbyName"));
      this.dataservice.setHobbies(this.selectedHobbys);
    }
  }

  deleteSelectedHobby(hobbyName: string):void{
    this.selectedHobbys.forEach((value,index)=>{
      if(value==hobbyName) this.selectedHobbys.splice(index,1);
    });
    console.log(this.selectedHobbys);
  }

}
