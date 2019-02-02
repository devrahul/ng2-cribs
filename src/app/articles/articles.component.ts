import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/posts/post.service';
import { IPostItems } from './../model/interfaces/post';
import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'app-articles',
  templateUrl: 'articles.component.html',
  styleUrls: ['articles.component.css']
})
export class ArticlesComponent implements OnInit {
  posts: Observable<IPostItems[]>;
  errors: string;
  showDetails: boolean;
  constructor(private _postservices: PostService) {}

  ngOnInit(): void {
    this.showDetails = false;
    this.posts =  this._postservices.getAllPosts();
  }
}
