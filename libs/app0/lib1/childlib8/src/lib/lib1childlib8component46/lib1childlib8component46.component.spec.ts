import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib8component46Component } from './lib1childlib8component46.component';

describe('Lib1childlib8component46Component', () => {
  let component: Lib1childlib8component46Component;
  let fixture: ComponentFixture<Lib1childlib8component46Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib8component46Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib8component46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
