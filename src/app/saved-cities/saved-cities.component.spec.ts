import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCitiesComponent } from './saved-cities.component';

describe('SavedCitiesComponent', () => {
  let component: SavedCitiesComponent;
  let fixture: ComponentFixture<SavedCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
