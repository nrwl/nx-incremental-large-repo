import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib6component5Component } from './lib1childlib6component5.component';

describe('Lib1childlib6component5Component', () => {
  let component: Lib1childlib6component5Component;
  let fixture: ComponentFixture<Lib1childlib6component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib6component5Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib6component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
