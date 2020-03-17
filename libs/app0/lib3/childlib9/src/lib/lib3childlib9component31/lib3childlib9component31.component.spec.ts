import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib9component31Component } from './lib3childlib9component31.component';

describe('Lib3childlib9component31Component', () => {
  let component: Lib3childlib9component31Component;
  let fixture: ComponentFixture<Lib3childlib9component31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib9component31Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib9component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
