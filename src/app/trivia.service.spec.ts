import { TestBed, inject } from '@angular/core/testing';

import { TriviaService } from './trivia.service';

describe('TriviaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriviaService]
    });
  });

  it('should ...', inject([TriviaService], (service: TriviaService) => {
    expect(service).toBeTruthy();
  }));
});
