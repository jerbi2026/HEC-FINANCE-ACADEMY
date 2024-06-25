import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgComponent } from './ag.component';

describe('AgComponent', () => {
  let component: AgComponent;
  let fixture: ComponentFixture<AgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgComponent]
    });
    fixture = TestBed.createComponent(AgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
