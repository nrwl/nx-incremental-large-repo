import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib8component7Component } from './lib1childlib8component7.component';

describe('Lib1childlib8component7Component', () => {
  let component: Lib1childlib8component7Component;
  let fixture: ComponentFixture<Lib1childlib8component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib8component7Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib8component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
