import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteratureListComponent } from './literature-list.component';

describe('LiteratureListComponent', () => {
  let component: LiteratureListComponent;
  let fixture: ComponentFixture<LiteratureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteratureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteratureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
