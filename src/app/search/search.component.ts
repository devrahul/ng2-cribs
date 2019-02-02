import { Component, OnInit, OnDestroy } from '@angular/core';
import { RandomUserService } from '../services/random-user.service';
import { UserItems } from '../model/random-user-type';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, merge } from 'rxjs';
import { take, mergeMap} from 'rxjs/operators';

// import { Routes, ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  errors = '';
  userObject: Observable<UserItems[]>;
  loading = false;
  searchField: string;
  limitField: Number[] = [5, 10, 15, 20, 25, 50, 100, 150, 200, 250];
  sortField: String[] = ['name', 'postcode'];
  searchFieldValue: string;
  isAllowDisplayType = 'grid';
  req: any;
  sortFields: Array<string> = ['name', 'location', 'city'];
  update$= new Subject<void>();
  constructor(
    private userService: RandomUserService,
    private usrroutes: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = true;
    // this.userObject  = this.getRandomUsers();
    if (this.userObject) {
      this.loading = false;
    }
    const initialUsers$ = this.getDataOnce();
    const updates$ = this.update$.pipe(
      mergeMap(() => this.getDataOnce())
    );
    this.userObject = merge(initialUsers$, updates$ );
  }
  ngOnDestory() {
    this.req.unsubscribe();
  }

  getDataOnce() {
    return this.getRandomUsers().pipe(take(1));
  }

  doSearch() {

  }

  addNewUser() {
    const link = ['addnewuser'];
    this.router.navigate(link);
  }

  getRandomUsers() {
     return this.userService
      .getAllRandomUsers();
  }

  searchUserBylimit(limit) {
    return this.userService
      .getUserByLimit(parseInt(limit, 10));
    /*const data = []
        this.req = item.forEach( user => {
          if( user ){
            return data.push( user )
          }
       } )
        if( data.length > 0)
        //this.userObject = data
        this.userObject = [] ;
      }*/
  }

  searchUserBy(event: any) {
    // console.log(event)
    if (event.key === 'Enter') {
      this.searchFieldValue = event.target.value;
    }
  }

  renderDisplay(type) {
    this.isAllowDisplayType = type;
  }
}
