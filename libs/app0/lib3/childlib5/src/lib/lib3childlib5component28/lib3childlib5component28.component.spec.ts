import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib5component28Component } from './lib3childlib5component28.component';

describe('Lib3childlib5component28Component', () => {
  let component: Lib3childlib5component28Component;
  let fixture: ComponentFixture<Lib3childlib5component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib5component28Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib5component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
