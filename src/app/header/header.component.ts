import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';


@Component({
  selector: 'app-top-menu',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLoading = false;
  public isQuickSearchEnabled: boolean ;
  activeUrl: string;
  subscription;
  location: string;
  constructor( private activatedRoute: ActivatedRoute, private router: Router) {
    console.log('constructor is being invoked');
   }

  ngOnInit() {
    this.isLoading = true;
    this.getRoutes();
    console.log('ngonint is being invoked');
  }

  getRoutes() {
    return this.router.events.subscribe( s => {
      if ( s instanceof NavigationEnd ) {
        this.activeUrl = s.urlAfterRedirects;
        this.location =  this.activeUrl;
      }
    });
  }




}
