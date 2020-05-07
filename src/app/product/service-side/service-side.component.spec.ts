import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSideComponent } from './service-side.component';

describe('ServiceSideComponent', () => {
  let component: ServiceSideComponent;
  let fixture: ComponentFixture<ServiceSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
