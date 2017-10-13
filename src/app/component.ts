import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // tslint:disable-next-line:no-multiline-string
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent  { public name: String = 'Angular'; }
