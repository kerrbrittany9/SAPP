import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookConversationComponent } from './add-book-conversation.component';

describe('AddBookConversationComponent', () => {
  let component: AddBookConversationComponent;
  let fixture: ComponentFixture<AddBookConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
