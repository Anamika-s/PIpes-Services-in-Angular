import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  name : string ="Deepak";
  todayDate = new Date();
  jsonval = {name :"Ajay", age:25, addreess: {house_no:"12/A", state:"Delhi", city:"new delhi"}};
  months= ["Jan", "Feb", "March", "April","May"];
  constructor() { }

  ngOnInit(): void {
  }

}
