import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib0component23Component } from './lib1childlib0component23.component';

describe('Lib1childlib0component23Component', () => {
  let component: Lib1childlib0component23Component;
  let fixture: ComponentFixture<Lib1childlib0component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib0component23Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib0component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
