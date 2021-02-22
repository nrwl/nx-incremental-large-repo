import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib7component26Component } from './lib2childlib7component26.component';

describe('Lib2childlib7component26Component', () => {
  let component: Lib2childlib7component26Component;
  let fixture: ComponentFixture<Lib2childlib7component26Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib7component26Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib7component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
