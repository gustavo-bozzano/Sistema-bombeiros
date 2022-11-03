import { TestBed } from '@angular/core/testing';

import { GuarnicaoService } from './guarnicao.service';

describe('GuarnicaoService', () => {
  let service: GuarnicaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuarnicaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
