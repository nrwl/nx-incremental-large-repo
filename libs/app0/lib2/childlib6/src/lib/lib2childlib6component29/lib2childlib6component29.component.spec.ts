import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib6component29Component } from './lib2childlib6component29.component';

describe('Lib2childlib6component29Component', () => {
  let component: Lib2childlib6component29Component;
  let fixture: ComponentFixture<Lib2childlib6component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib6component29Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib6component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
