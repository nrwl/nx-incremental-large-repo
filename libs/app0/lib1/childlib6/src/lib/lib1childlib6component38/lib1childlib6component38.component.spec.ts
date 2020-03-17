import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib6component38Component } from './lib1childlib6component38.component';

describe('Lib1childlib6component38Component', () => {
  let component: Lib1childlib6component38Component;
  let fixture: ComponentFixture<Lib1childlib6component38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib6component38Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib6component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
