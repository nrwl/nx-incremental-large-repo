import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib2component10Component } from './lib3childlib2component10.component';

describe('Lib3childlib2component10Component', () => {
  let component: Lib3childlib2component10Component;
  let fixture: ComponentFixture<Lib3childlib2component10Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib2component10Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib2component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
