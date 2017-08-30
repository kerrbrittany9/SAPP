import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedBooksComponent } from './saved-books.component';

describe('SavedBooksComponent', () => {
  let component: SavedBooksComponent;
  let fixture: ComponentFixture<SavedBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
