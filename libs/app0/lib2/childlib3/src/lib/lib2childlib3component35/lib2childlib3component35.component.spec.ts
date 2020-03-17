import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib3component35Component } from './lib2childlib3component35.component';

describe('Lib2childlib3component35Component', () => {
  let component: Lib2childlib3component35Component;
  let fixture: ComponentFixture<Lib2childlib3component35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib3component35Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib3component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
