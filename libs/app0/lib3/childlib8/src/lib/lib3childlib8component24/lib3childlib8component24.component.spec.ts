import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib8component24Component } from './lib3childlib8component24.component';

describe('Lib3childlib8component24Component', () => {
  let component: Lib3childlib8component24Component;
  let fixture: ComponentFixture<Lib3childlib8component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib8component24Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib8component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
