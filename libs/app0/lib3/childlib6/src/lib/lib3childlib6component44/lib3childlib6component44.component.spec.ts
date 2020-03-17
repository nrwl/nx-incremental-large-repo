import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib6component44Component } from './lib3childlib6component44.component';

describe('Lib3childlib6component44Component', () => {
  let component: Lib3childlib6component44Component;
  let fixture: ComponentFixture<Lib3childlib6component44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib6component44Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib6component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
