import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { ICribItems } from './../model/interfaces/crib';
import { ActivatedRoute, Router } from '@angular/router';
import { CribsService } from './../services/cribs.service';
@Component({
  moduleId: module.id,
  selector: 'app-propertydetails',
  templateUrl: 'propertydetails.component.html',
  styleUrls: ['propertydetails.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertydetailsComponent implements OnInit {
  sub: any;
  propertyData: ICribItems[];
  error: string;
  @Input('crib') crib: ICribItems[];
  showDetails: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cribServices: CribsService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const propId = Number.parseInt(params.id);
      this.getPropertyById(propId);
    });
  }

  getPropertyById(id: number) {
    return this.cribServices.getCrib(id).subscribe(
      data => {
        this.propertyData = data;
        this.cd.markForCheck();
      },
      error => (this.error = error)
    );
  }

  gotoPropertyList() {
    const link = ['properties'];
    this.router.navigate(link);
  }
}
