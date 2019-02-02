import { TestBed, inject } from '@angular/core/testing';

import { PhotostockServicesService } from './photostock-services.service';

describe('PhotostockServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotostockServicesService]
    });
  });

  it('should ...', inject([PhotostockServicesService], (service: PhotostockServicesService) => {
    expect(service).toBeTruthy();
  }));
});
