import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib6component48Component } from './lib3childlib6component48.component';

describe('Lib3childlib6component48Component', () => {
  let component: Lib3childlib6component48Component;
  let fixture: ComponentFixture<Lib3childlib6component48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib6component48Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib6component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
