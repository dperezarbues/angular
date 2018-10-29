import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  wolverine: String = 'https://www.sideshowtoy.com/assets/products/300543-wolverine/lg/marvel-wolverine-premium-format-figure-sideshow-300543-13.jpg';
  batman: String = 'https://www.sideshowtoy.com/wp-content/uploads/2017/11/dc-comics-justice-league-batman-statue-prime1-studio-feature-903246-1.jpg';

  //getImage = (tes) => this[tes] || '';
}
