import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib4component23Component } from './lib1childlib4component23.component';

describe('Lib1childlib4component23Component', () => {
  let component: Lib1childlib4component23Component;
  let fixture: ComponentFixture<Lib1childlib4component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib4component23Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib4component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
