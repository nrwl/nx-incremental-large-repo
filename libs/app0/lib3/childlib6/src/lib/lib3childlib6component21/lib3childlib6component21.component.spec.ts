import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib6component21Component } from './lib3childlib6component21.component';

describe('Lib3childlib6component21Component', () => {
  let component: Lib3childlib6component21Component;
  let fixture: ComponentFixture<Lib3childlib6component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib6component21Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib6component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
