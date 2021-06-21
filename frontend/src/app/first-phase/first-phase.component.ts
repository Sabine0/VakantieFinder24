import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-phase',
  templateUrl: './first-phase.component.html',
  styleUrls: ['./first-phase.component.scss']
})
export class FirstPhaseComponent implements OnInit {
  private selectedHobbys: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  selectHobby(event: any): void{
    let img =  event.target;

    if(img.className == "notSelected") {
      img.className = "selected";
      this.selectedHobbys.push(img.getAttribute("hobbyName"));
      console.log(this.selectedHobbys)
    }else{
      img.className = "notSelected";
      this.deleteSelectedHobby(img.getAttribute("hobbyName"));
    }
  }

  deleteSelectedHobby(hobbyName: string):void{
    this.selectedHobbys.forEach((value,index)=>{
      if(value==hobbyName) this.selectedHobbys.splice(index,1);
    });
    console.log(this.selectedHobbys);
  }

}
