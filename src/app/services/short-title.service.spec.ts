import { TestBed, inject } from '@angular/core/testing';

import { ShortTitleService } from './short-title.service';

describe('ShortTitleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShortTitleService]
    });
  });

  it('should ...', inject([ShortTitleService], (service: ShortTitleService) => {
    expect(service).toBeTruthy();
  }));
});
