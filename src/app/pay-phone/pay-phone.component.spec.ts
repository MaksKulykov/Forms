import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPhoneComponent } from './pay-phone.component';

describe('PayPhoneComponent', () => {
  let component: PayPhoneComponent;
  let fixture: ComponentFixture<PayPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
