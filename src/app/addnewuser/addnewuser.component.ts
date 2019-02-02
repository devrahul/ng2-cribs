import { Component, OnInit , Input, Output } from '@angular/core';

@Component({
  moduleId : module.id,
  selector: 'app-addnewuser',
  templateUrl: 'addnewuser.component.html',
  styleUrls: ['addnewuser.component.css']
})
export class AddnewuserComponent implements OnInit {
  
  @Input('show-modal') modal :boolean
  constructor() { }

  ngOnInit() {
  }

  showModal(){
    this.modal =true
  }

}
