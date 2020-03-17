import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib6component32Component } from './lib1childlib6component32.component';

describe('Lib1childlib6component32Component', () => {
  let component: Lib1childlib6component32Component;
  let fixture: ComponentFixture<Lib1childlib6component32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib6component32Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib6component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
