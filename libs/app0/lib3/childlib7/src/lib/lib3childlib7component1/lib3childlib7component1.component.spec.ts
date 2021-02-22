import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib7component1Component } from './lib3childlib7component1.component';

describe('Lib3childlib7component1Component', () => {
  let component: Lib3childlib7component1Component;
  let fixture: ComponentFixture<Lib3childlib7component1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib7component1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
