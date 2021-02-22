import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib7component42Component } from './lib3childlib7component42.component';

describe('Lib3childlib7component42Component', () => {
  let component: Lib3childlib7component42Component;
  let fixture: ComponentFixture<Lib3childlib7component42Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib7component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
