import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaListComponent } from './trivia-list.component';

describe('TriviaListComponent', () => {
  let component: TriviaListComponent;
  let fixture: ComponentFixture<TriviaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
