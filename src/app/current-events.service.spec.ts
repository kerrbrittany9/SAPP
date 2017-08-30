import { TestBed, inject } from '@angular/core/testing';

import { CurrentEventsService } from './current-events.service';

describe('CurrentEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentEventsService]
    });
  });

  it('should ...', inject([CurrentEventsService], (service: CurrentEventsService) => {
    expect(service).toBeTruthy();
  }));
});
