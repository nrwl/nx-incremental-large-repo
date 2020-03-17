import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib9component41Component } from './lib3childlib9component41.component';

describe('Lib3childlib9component41Component', () => {
  let component: Lib3childlib9component41Component;
  let fixture: ComponentFixture<Lib3childlib9component41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib9component41Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib9component41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
