import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/users/user.service';
import { IUserItems } from './../model/interfaces/users';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'app-userlist',
  templateUrl: 'userlist.component.html',
  styleUrls: ['userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  users: Observable<IUserItems[]>;
  errors: string;
  showOtherDetails: boolean = false;
  constructor(
    private userservices: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.users = this.userservices.getAllUsers();
  }

  getUserDetails(id) {
    // this.route.params;
    const link = ['users'];
    this.router.navigate(link, id);
  }
}
