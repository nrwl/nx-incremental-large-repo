import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib7component10Component } from './lib3childlib7component10.component';

describe('Lib3childlib7component10Component', () => {
  let component: Lib3childlib7component10Component;
  let fixture: ComponentFixture<Lib3childlib7component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib7component10Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
