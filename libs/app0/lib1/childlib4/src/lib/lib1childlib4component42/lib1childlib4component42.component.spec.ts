import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib4component42Component } from './lib1childlib4component42.component';

describe('Lib1childlib4component42Component', () => {
  let component: Lib1childlib4component42Component;
  let fixture: ComponentFixture<Lib1childlib4component42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib4component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib4component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
