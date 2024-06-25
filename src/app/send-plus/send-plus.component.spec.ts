import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPlusComponent } from './send-plus.component';

describe('SendPlusComponent', () => {
  let component: SendPlusComponent;
  let fixture: ComponentFixture<SendPlusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendPlusComponent]
    });
    fixture = TestBed.createComponent(SendPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
