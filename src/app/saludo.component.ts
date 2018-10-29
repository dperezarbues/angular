import { Component } from "@angular/core";

@Component({
    selector: 'saludo',
    template: `<h1>Hello {{name}}</h1>`
})

export class SaludoComponent {
    name: string = 'pepe';
}