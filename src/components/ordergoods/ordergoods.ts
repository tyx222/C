import { Component, Input } from '@angular/core';

/**
 * Generated class for the OrdergoodsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ordergoods',
  templateUrl: 'ordergoods.html'
})
export class OrdergoodsComponent {
  @Input() goodname;
  @Input() specification;
  @Input() num;
  @Input() orderid;
  @Input() price;
  @Input() goodimg;

  constructor() {
  }

}
