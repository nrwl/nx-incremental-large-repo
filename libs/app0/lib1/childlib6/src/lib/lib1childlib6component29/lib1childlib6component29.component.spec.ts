import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib6component29Component } from './lib1childlib6component29.component';

describe('Lib1childlib6component29Component', () => {
  let component: Lib1childlib6component29Component;
  let fixture: ComponentFixture<Lib1childlib6component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib6component29Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib6component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
