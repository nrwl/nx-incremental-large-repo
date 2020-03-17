import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib4component4Component } from './lib3childlib4component4.component';

describe('Lib3childlib4component4Component', () => {
  let component: Lib3childlib4component4Component;
  let fixture: ComponentFixture<Lib3childlib4component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib4component4Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib4component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
