import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib8component30Component } from './lib2childlib8component30.component';

describe('Lib2childlib8component30Component', () => {
  let component: Lib2childlib8component30Component;
  let fixture: ComponentFixture<Lib2childlib8component30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib8component30Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib8component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
