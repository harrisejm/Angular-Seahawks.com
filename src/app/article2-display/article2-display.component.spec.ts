import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Article2DisplayComponent } from './article2-display.component';

describe('Article2DisplayComponent', () => {
  let component: Article2DisplayComponent;
  let fixture: ComponentFixture<Article2DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article2DisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Article2DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
