import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendExcelComponent } from './send-excel.component';

describe('SendExcelComponent', () => {
  let component: SendExcelComponent;
  let fixture: ComponentFixture<SendExcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendExcelComponent]
    });
    fixture = TestBed.createComponent(SendExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
