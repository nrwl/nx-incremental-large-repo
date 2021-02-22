import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib7component42Component } from './lib2childlib7component42.component';

describe('Lib2childlib7component42Component', () => {
  let component: Lib2childlib7component42Component;
  let fixture: ComponentFixture<Lib2childlib7component42Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib7component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib7component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
