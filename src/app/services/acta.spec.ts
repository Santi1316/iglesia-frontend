import { TestBed } from '@angular/core/testing';

import { Acta } from './acta';

describe('Acta', () => {
  let service: Acta;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Acta);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
