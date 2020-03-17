import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib6component15Component } from './lib1childlib6component15.component';

describe('Lib1childlib6component15Component', () => {
  let component: Lib1childlib6component15Component;
  let fixture: ComponentFixture<Lib1childlib6component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib6component15Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib6component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
