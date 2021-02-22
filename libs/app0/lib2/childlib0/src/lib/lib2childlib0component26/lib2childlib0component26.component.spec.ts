import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib0component26Component } from './lib2childlib0component26.component';

describe('Lib2childlib0component26Component', () => {
  let component: Lib2childlib0component26Component;
  let fixture: ComponentFixture<Lib2childlib0component26Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib0component26Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib0component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
