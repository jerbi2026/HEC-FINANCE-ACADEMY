import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruSearchComponent } from './recru-search.component';

describe('RecruSearchComponent', () => {
  let component: RecruSearchComponent;
  let fixture: ComponentFixture<RecruSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruSearchComponent]
    });
    fixture = TestBed.createComponent(RecruSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
