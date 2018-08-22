import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Article4DisplayComponent } from './article4-display.component';

describe('Article4DisplayComponent', () => {
  let component: Article4DisplayComponent;
  let fixture: ComponentFixture<Article4DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article4DisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Article4DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
