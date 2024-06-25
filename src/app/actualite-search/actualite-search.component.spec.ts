import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteSearchComponent } from './actualite-search.component';

describe('ActualiteSearchComponent', () => {
  let component: ActualiteSearchComponent;
  let fixture: ComponentFixture<ActualiteSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualiteSearchComponent]
    });
    fixture = TestBed.createComponent(ActualiteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
