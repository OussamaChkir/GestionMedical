import { TestBed } from '@angular/core/testing';

import { LettreService } from './lettre.service';

describe('LettreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LettreService = TestBed.get(LettreService);
    expect(service).toBeTruthy();
  });
});
