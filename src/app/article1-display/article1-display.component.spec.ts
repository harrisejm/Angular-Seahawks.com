import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Article1DisplayComponent } from './article1-display.component';

describe('Article1DisplayComponent', () => {
  let component: Article1DisplayComponent;
  let fixture: ComponentFixture<Article1DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article1DisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Article1DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
