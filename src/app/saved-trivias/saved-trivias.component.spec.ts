import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedTriviasComponent } from './saved-trivias.component';

describe('SavedTriviasComponent', () => {
  let component: SavedTriviasComponent;
  let fixture: ComponentFixture<SavedTriviasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedTriviasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedTriviasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
