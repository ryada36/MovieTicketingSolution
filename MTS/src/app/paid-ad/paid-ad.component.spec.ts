import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidAdComponent } from './paid-ad.component';

describe('PaidAdComponent', () => {
  let component: PaidAdComponent;
  let fixture: ComponentFixture<PaidAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
