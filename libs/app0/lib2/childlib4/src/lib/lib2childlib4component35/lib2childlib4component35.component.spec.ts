import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib4component35Component } from './lib2childlib4component35.component';

describe('Lib2childlib4component35Component', () => {
  let component: Lib2childlib4component35Component;
  let fixture: ComponentFixture<Lib2childlib4component35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component35Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
