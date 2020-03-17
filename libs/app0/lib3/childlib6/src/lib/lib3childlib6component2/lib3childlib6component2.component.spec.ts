import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib6component2Component } from './lib3childlib6component2.component';

describe('Lib3childlib6component2Component', () => {
  let component: Lib3childlib6component2Component;
  let fixture: ComponentFixture<Lib3childlib6component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib6component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib6component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
