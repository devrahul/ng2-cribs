import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit {
  @Input('user') user;
  constructor() {}

  ngOnInit() {}
}
