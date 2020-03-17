import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib7component32Component } from './lib3childlib7component32.component';

describe('Lib3childlib7component32Component', () => {
  let component: Lib3childlib7component32Component;
  let fixture: ComponentFixture<Lib3childlib7component32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib7component32Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
