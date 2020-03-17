import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib8component26Component } from './lib1childlib8component26.component';

describe('Lib1childlib8component26Component', () => {
  let component: Lib1childlib8component26Component;
  let fixture: ComponentFixture<Lib1childlib8component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib8component26Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib8component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
