import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCurrentEventsComponent } from './saved-current-events.component';

describe('SavedCurrentEventsComponent', () => {
  let component: SavedCurrentEventsComponent;
  let fixture: ComponentFixture<SavedCurrentEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedCurrentEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCurrentEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
