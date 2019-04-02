import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterHomeComponent } from './theater-home.component';

describe('TheaterHomeComponent', () => {
  let component: TheaterHomeComponent;
  let fixture: ComponentFixture<TheaterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
