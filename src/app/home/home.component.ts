import { Component, OnInit , Input} from '@angular/core';
import {Content} from './../model/interfaces/content'

@Component({
  moduleId : module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  homecontent: string;
  constructor() {
  }

  ngOnInit() {
    this.homecontent = `I am a web developer from New Delhi, India. I have 9 years experience in building web applications.
    Currently working as technical lead role in company with approximately 8.7 Years of Experience in web development and I have used these skill in recent in projects : JavaScript, jQuery, Angular 2, Angular 4,Angular 6, JavaScript, Handlebars, JIRA, GIT, Liferay Java Tool, JSON-based RESTful APIs.Understanding of Typescripts, Linux,JSON, Web Services, REST, Jenkins (deployment tool), HTML5 , Bootstrap 3/4, Apache, JIRA, Use Visual studio.Understanding of React.js, Understanding of DFP & Header Bidding (revenue), Revenue modes & Analytics Integration in projects during my career in companies.`
  }

}
