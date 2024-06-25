import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashSearchComponent } from './dash-search.component';

describe('DashSearchComponent', () => {
  let component: DashSearchComponent;
  let fixture: ComponentFixture<DashSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashSearchComponent]
    });
    fixture = TestBed.createComponent(DashSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
