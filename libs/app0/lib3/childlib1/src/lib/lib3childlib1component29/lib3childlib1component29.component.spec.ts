import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib1component29Component } from './lib3childlib1component29.component';

describe('Lib3childlib1component29Component', () => {
  let component: Lib3childlib1component29Component;
  let fixture: ComponentFixture<Lib3childlib1component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib1component29Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib1component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
