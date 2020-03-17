import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib3component28Component } from './lib3childlib3component28.component';

describe('Lib3childlib3component28Component', () => {
  let component: Lib3childlib3component28Component;
  let fixture: ComponentFixture<Lib3childlib3component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib3component28Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
