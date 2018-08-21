import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Article3DisplayComponent } from './article3-display.component';

describe('Article3DisplayComponent', () => {
  let component: Article3DisplayComponent;
  let fixture: ComponentFixture<Article3DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article3DisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Article3DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
