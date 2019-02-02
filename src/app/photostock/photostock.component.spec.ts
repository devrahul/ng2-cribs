import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotostockComponent } from './photostock.component';

describe('PhotostockComponent', () => {
  let component: PhotostockComponent;
  let fixture: ComponentFixture<PhotostockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotostockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotostockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
