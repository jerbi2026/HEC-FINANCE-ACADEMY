import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOverviewComponent } from './home-overview.component';

describe('HomeOverviewComponent', () => {
  let component: HomeOverviewComponent;
  let fixture: ComponentFixture<HomeOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeOverviewComponent]
    });
    fixture = TestBed.createComponent(HomeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
