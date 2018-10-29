import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  value : number;
  constructor() {
    this.value = 0;
  }

  ngOnInit() {
  }

  add() {
    this.value++;
  }

  minus(){
    this.value--;
  }
}
