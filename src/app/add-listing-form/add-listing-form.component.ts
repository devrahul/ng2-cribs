import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule,NgForm}   from '@angular/forms';
import { CribsService } from './../services/cribs.service';
import { UtilService } from './../services/util.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  @ViewChild('newCribForm') newCribForm: NgForm;
  propertyTypes: Array<string> = ['Condo', 'Duplex', 'House'];

  constructor(
    private cribsService: CribsService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
  }

  onCribSubmit(data) {
    console.log(data);
    this.cribsService.addCrib(data);
    this.newCribForm.reset();
  }

}
