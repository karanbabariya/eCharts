import { TestBed } from '@angular/core/testing';

import { fetchDataService } from './fetchdata.service';

describe('Graphics.DataService', () => {
  let service: fetchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(fetchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
