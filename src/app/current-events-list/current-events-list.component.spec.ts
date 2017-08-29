import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentEventsListComponent } from './current-events-list.component';

describe('CurrentEventsListComponent', () => {
  let component: CurrentEventsListComponent;
  let fixture: ComponentFixture<CurrentEventsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentEventsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
