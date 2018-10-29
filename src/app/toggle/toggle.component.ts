import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  inDOM: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggle = () => this.inDOM = !this.inDOM; 

}
