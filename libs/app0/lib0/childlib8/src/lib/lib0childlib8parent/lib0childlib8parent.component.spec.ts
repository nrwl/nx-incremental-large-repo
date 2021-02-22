import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib8parentComponent } from './lib0childlib8parent.component';

describe('Lib0childlib8parentComponent', () => {
  let component: Lib0childlib8parentComponent;
  let fixture: ComponentFixture<Lib0childlib8parentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib8parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
