import { TestBed, inject } from '@angular/core/testing';

import { CitiesApiService } from './cities-api.service';

describe('CitiesApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitiesApiService]
    });
  });

  it('should ...', inject([CitiesApiService], (service: CitiesApiService) => {
    expect(service).toBeTruthy();
  }));
});
