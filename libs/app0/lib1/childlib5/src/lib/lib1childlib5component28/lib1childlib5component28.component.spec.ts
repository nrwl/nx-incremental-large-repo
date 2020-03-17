import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib5component28Component } from './lib1childlib5component28.component';

describe('Lib1childlib5component28Component', () => {
  let component: Lib1childlib5component28Component;
  let fixture: ComponentFixture<Lib1childlib5component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib5component28Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib5component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
