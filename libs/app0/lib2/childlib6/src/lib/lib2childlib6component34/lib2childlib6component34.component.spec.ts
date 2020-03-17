import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib6component34Component } from './lib2childlib6component34.component';

describe('Lib2childlib6component34Component', () => {
  let component: Lib2childlib6component34Component;
  let fixture: ComponentFixture<Lib2childlib6component34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib6component34Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib6component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
