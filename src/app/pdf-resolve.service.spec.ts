import { TestBed } from '@angular/core/testing';

import { PdfResolveService } from './pdf-resolve.service';

describe('PdfResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdfResolveService = TestBed.get(PdfResolveService);
    expect(service).toBeTruthy();
  });
});
