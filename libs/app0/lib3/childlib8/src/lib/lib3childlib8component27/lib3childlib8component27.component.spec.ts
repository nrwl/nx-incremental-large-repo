import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib8component27Component } from './lib3childlib8component27.component';

describe('Lib3childlib8component27Component', () => {
  let component: Lib3childlib8component27Component;
  let fixture: ComponentFixture<Lib3childlib8component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib8component27Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib8component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
