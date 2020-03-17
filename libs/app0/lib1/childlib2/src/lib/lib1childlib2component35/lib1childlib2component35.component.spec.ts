import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib2component35Component } from './lib1childlib2component35.component';

describe('Lib1childlib2component35Component', () => {
  let component: Lib1childlib2component35Component;
  let fixture: ComponentFixture<Lib1childlib2component35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib2component35Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib2component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
