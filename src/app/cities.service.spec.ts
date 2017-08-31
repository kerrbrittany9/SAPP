import { TestBed, inject } from '@angular/core/testing';

import { CitiesService } from './cities.service';

describe('CitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitiesService]
    });
  });

  it('should ...', inject([CitiesService], (service: CitiesService) => {
    expect(service).toBeTruthy();
  }));
});
