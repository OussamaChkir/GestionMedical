import { TestBed } from '@angular/core/testing';

import { CnamServiceService } from './cnam-service.service';

describe('CnamServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CnamServiceService = TestBed.get(CnamServiceService);
    expect(service).toBeTruthy();
  });
});
