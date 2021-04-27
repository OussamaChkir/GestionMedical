import { TestBed } from '@angular/core/testing';

import { ApciService } from './apci.service';

describe('ApciService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApciService = TestBed.get(ApciService);
    expect(service).toBeTruthy();
  });
});
