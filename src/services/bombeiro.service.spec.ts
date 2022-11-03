import { TestBed } from '@angular/core/testing';

import { BombeiroService } from './bombeiro.service';

describe('BombeiroService', () => {
  let service: BombeiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BombeiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
