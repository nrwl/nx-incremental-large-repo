import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib6component12Component } from './lib3childlib6component12.component';

describe('Lib3childlib6component12Component', () => {
  let component: Lib3childlib6component12Component;
  let fixture: ComponentFixture<Lib3childlib6component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib6component12Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib6component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
