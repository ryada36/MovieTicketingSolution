import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdComponent } from './client-ad.component';

describe('ClientAdComponent', () => {
  let component: ClientAdComponent;
  let fixture: ComponentFixture<ClientAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
