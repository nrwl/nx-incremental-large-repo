import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib1component4Component } from './lib3childlib1component4.component';

describe('Lib3childlib1component4Component', () => {
  let component: Lib3childlib1component4Component;
  let fixture: ComponentFixture<Lib3childlib1component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib1component4Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib1component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
