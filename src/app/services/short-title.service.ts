import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShortTitleService {

  constructor() { }

  shortTittle( title ) : any  {
  	return title.substring(0, 10 ).split(" ")
    //.slice(0, -1).join(" ") + "...More >>";
  }

}
