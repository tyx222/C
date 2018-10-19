import { Component } from '@angular/core';

/**
 * Generated class for the TrickComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'trick',
  templateUrl: 'trick.html'
})
export class TrickComponent {

  text: string;

  constructor() {
    console.log('Hello TrickComponent Component');
    this.text = 'Hello World';
  }

}
