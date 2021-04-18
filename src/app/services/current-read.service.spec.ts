import { TestBed } from '@angular/core/testing';

import { CurrentReadService } from './current-read.service';

describe('CurrentReadService', () => {
  let service: CurrentReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
