import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequestVerificationComponent } from './service-request-verification.component';

describe('ServiceRequestVerificationComponent', () => {
  let component: ServiceRequestVerificationComponent;
  let fixture: ComponentFixture<ServiceRequestVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceRequestVerificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceRequestVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
