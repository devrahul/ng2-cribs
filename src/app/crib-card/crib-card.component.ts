
import { Component, Input } from '@angular/core';
import { ICribItems } from './../model/interfaces/crib';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent {

  @Input('crib') crib: ICribItems[];
  @Input('render') render: any;

  constructor() {}

}
