import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCalendrierComponent } from './dash-calendrier.component';

describe('DashCalendrierComponent', () => {
  let component: DashCalendrierComponent;
  let fixture: ComponentFixture<DashCalendrierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashCalendrierComponent]
    });
    fixture = TestBed.createComponent(DashCalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
