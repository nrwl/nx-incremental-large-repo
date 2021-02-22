import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib7component7Component } from './lib2childlib7component7.component';

describe('Lib2childlib7component7Component', () => {
  let component: Lib2childlib7component7Component;
  let fixture: ComponentFixture<Lib2childlib7component7Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib7component7Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib7component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
