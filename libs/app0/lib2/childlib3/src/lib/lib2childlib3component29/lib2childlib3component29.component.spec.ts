import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib3component29Component } from './lib2childlib3component29.component';

describe('Lib2childlib3component29Component', () => {
  let component: Lib2childlib3component29Component;
  let fixture: ComponentFixture<Lib2childlib3component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib3component29Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib3component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
