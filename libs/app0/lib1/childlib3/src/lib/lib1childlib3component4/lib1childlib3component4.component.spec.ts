import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib3component4Component } from './lib1childlib3component4.component';

describe('Lib1childlib3component4Component', () => {
  let component: Lib1childlib3component4Component;
  let fixture: ComponentFixture<Lib1childlib3component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib3component4Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib3component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
