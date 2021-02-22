import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib6component17Component } from './lib2childlib6component17.component';

describe('Lib2childlib6component17Component', () => {
  let component: Lib2childlib6component17Component;
  let fixture: ComponentFixture<Lib2childlib6component17Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib6component17Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib6component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
