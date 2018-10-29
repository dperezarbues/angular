import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  heroes: Array<Object> = [
    {
      name: 'batman',
      color: 'black',
      superpowers: ['power1','power2','power3']
    },{
      name: 'superman',
      color: 'red',
      superpowers: ['power1','power2','power3']
    },{
      name: 'enigma',
      color: 'green',
      superpowers: ['power1','power2','power3']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
