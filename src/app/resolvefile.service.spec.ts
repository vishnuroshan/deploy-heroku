import { TestBed } from '@angular/core/testing';

import { ResolvefileService } from './resolvefile.service';

describe('ResolvefileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolvefileService = TestBed.get(ResolvefileService);
    expect(service).toBeTruthy();
  });
});
