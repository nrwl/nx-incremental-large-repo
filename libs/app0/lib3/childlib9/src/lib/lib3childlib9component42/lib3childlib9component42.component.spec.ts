import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib9component42Component } from './lib3childlib9component42.component';

describe('Lib3childlib9component42Component', () => {
  let component: Lib3childlib9component42Component;
  let fixture: ComponentFixture<Lib3childlib9component42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib9component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib9component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
