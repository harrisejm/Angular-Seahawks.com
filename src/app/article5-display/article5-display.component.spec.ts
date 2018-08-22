import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Article5DisplayComponent } from './article5-display.component';

describe('Article5DisplayComponent', () => {
  let component: Article5DisplayComponent;
  let fixture: ComponentFixture<Article5DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article5DisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Article5DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
