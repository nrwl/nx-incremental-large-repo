import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib6component15Component } from './lib2childlib6component15.component';

describe('Lib2childlib6component15Component', () => {
  let component: Lib2childlib6component15Component;
  let fixture: ComponentFixture<Lib2childlib6component15Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib6component15Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib6component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
