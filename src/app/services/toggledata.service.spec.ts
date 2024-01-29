import { TestBed } from '@angular/core/testing';

import { ToggledataService } from './toggledata.service';

describe('ToggledataService', () => {
  let service: ToggledataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggledataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
