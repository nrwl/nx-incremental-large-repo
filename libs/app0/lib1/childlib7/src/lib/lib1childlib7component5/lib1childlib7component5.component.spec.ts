import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib7component5Component } from './lib1childlib7component5.component';

describe('Lib1childlib7component5Component', () => {
  let component: Lib1childlib7component5Component;
  let fixture: ComponentFixture<Lib1childlib7component5Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib7component5Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib7component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
