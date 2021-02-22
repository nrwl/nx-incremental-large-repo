import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib7component3Component } from './lib1childlib7component3.component';

describe('Lib1childlib7component3Component', () => {
  let component: Lib1childlib7component3Component;
  let fixture: ComponentFixture<Lib1childlib7component3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib7component3Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib7component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
