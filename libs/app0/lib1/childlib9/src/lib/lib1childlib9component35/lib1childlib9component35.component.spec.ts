import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib9component35Component } from './lib1childlib9component35.component';

describe('Lib1childlib9component35Component', () => {
  let component: Lib1childlib9component35Component;
  let fixture: ComponentFixture<Lib1childlib9component35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib9component35Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib9component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
