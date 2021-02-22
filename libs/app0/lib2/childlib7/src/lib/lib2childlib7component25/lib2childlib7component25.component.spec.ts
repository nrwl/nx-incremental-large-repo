import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib7component25Component } from './lib2childlib7component25.component';

describe('Lib2childlib7component25Component', () => {
  let component: Lib2childlib7component25Component;
  let fixture: ComponentFixture<Lib2childlib7component25Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib7component25Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib7component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
