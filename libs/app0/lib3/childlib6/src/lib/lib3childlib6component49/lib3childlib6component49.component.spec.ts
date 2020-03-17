import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib6component49Component } from './lib3childlib6component49.component';

describe('Lib3childlib6component49Component', () => {
  let component: Lib3childlib6component49Component;
  let fixture: ComponentFixture<Lib3childlib6component49Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib6component49Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib6component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
