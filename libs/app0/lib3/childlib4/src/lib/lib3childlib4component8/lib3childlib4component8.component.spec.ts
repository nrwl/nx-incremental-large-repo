import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib4component8Component } from './lib3childlib4component8.component';

describe('Lib3childlib4component8Component', () => {
  let component: Lib3childlib4component8Component;
  let fixture: ComponentFixture<Lib3childlib4component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib4component8Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib4component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
