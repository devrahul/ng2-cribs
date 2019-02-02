import { by } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';
import { IPostItems } from './../model/interfaces/post';
import { ShortTitleService } from './../services/short-title.service';

@Component({
  moduleId: module.id,
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.css']
})
export class PostComponent implements OnInit {
  @Input('post') post: IPostItems;
  @Input('error') error: Object;
  showDetails: boolean;

  constructor(private title: ShortTitleService) {
    this.showDetails = true;
  }

  ngOnInit() {}
}
