import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendOneComponent } from './send-one.component';

describe('SendOneComponent', () => {
  let component: SendOneComponent;
  let fixture: ComponentFixture<SendOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendOneComponent]
    });
    fixture = TestBed.createComponent(SendOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
