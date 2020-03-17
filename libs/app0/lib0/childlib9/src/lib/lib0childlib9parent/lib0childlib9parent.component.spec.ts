import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib9parentComponent } from './lib0childlib9parent.component';

describe('Lib0childlib9parentComponent', () => {
  let component: Lib0childlib9parentComponent;
  let fixture: ComponentFixture<Lib0childlib9parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib9parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
