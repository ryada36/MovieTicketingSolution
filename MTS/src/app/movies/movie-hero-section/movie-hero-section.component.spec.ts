import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHeroSectionComponent } from './movie-hero-section.component';

describe('MovieHeroSectionComponent', () => {
  let component: MovieHeroSectionComponent;
  let fixture: ComponentFixture<MovieHeroSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieHeroSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
