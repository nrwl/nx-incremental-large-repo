import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib8component48Component } from './lib3childlib8component48.component';

describe('Lib3childlib8component48Component', () => {
  let component: Lib3childlib8component48Component;
  let fixture: ComponentFixture<Lib3childlib8component48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib8component48Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib8component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
