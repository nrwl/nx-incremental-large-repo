import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib7component21Component } from './lib2childlib7component21.component';

describe('Lib2childlib7component21Component', () => {
  let component: Lib2childlib7component21Component;
  let fixture: ComponentFixture<Lib2childlib7component21Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib7component21Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib7component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
