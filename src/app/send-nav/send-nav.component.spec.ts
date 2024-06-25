import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendNavComponent } from './send-nav.component';

describe('SendNavComponent', () => {
  let component: SendNavComponent;
  let fixture: ComponentFixture<SendNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendNavComponent]
    });
    fixture = TestBed.createComponent(SendNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
