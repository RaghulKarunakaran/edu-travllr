import { TestBed } from '@angular/core/testing';

import { MyprofService } from './myprof.service';

describe('MyprofService', () => {
  let service: MyprofService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyprofService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
