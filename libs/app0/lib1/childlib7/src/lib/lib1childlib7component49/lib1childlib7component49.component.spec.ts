import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib7component49Component } from './lib1childlib7component49.component';

describe('Lib1childlib7component49Component', () => {
  let component: Lib1childlib7component49Component;
  let fixture: ComponentFixture<Lib1childlib7component49Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib7component49Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib7component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
