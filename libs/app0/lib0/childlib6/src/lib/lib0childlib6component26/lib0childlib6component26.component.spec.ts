import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib6component26Component } from './lib0childlib6component26.component';

describe('Lib0childlib6component26Component', () => {
  let component: Lib0childlib6component26Component;
  let fixture: ComponentFixture<Lib0childlib6component26Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib6component26Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib6component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
