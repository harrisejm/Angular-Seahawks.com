import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Article6DisplayComponent } from './article6-display.component';

describe('Article6DisplayComponent', () => {
  let component: Article6DisplayComponent;
  let fixture: ComponentFixture<Article6DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article6DisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Article6DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
