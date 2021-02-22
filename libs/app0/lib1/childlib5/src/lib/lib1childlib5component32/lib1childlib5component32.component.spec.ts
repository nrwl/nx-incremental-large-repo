import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib5component32Component } from './lib1childlib5component32.component';

describe('Lib1childlib5component32Component', () => {
  let component: Lib1childlib5component32Component;
  let fixture: ComponentFixture<Lib1childlib5component32Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib5component32Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib5component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
