import { Component, OnInit , Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-sign-up-success',
  templateUrl: 'sign-up-success.component.html',
  styleUrls: ['sign-up-success.component.css']
})
export class SignUpSuccessComponent implements OnInit {

  @Input('data') data: object;
  @Input ('message') message :object;
  
  constructor() { }

  ngOnInit() {
    this.message = this.data;
  }

}
