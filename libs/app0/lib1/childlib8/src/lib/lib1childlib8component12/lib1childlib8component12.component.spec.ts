import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib8component12Component } from './lib1childlib8component12.component';

describe('Lib1childlib8component12Component', () => {
  let component: Lib1childlib8component12Component;
  let fixture: ComponentFixture<Lib1childlib8component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib8component12Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib8component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
