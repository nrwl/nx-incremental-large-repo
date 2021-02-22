import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib0parentComponent } from './lib0childlib0parent.component';

describe('Lib0childlib0parentComponent', () => {
  let component: Lib0childlib0parentComponent;
  let fixture: ComponentFixture<Lib0childlib0parentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib0parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
