import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib0component29Component } from './lib3childlib0component29.component';

describe('Lib3childlib0component29Component', () => {
  let component: Lib3childlib0component29Component;
  let fixture: ComponentFixture<Lib3childlib0component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib0component29Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib0component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
