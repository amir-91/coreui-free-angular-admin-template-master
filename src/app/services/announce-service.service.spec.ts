import { TestBed } from '@angular/core/testing';

import { AnnounceServiceService } from './announce-service.service';

describe('AnnounceServiceService', () => {
  let service: AnnounceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnounceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
