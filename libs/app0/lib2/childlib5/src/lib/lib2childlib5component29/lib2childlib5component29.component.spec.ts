import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib5component29Component } from './lib2childlib5component29.component';

describe('Lib2childlib5component29Component', () => {
  let component: Lib2childlib5component29Component;
  let fixture: ComponentFixture<Lib2childlib5component29Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib5component29Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib5component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
