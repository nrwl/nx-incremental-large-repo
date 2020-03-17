import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib4component35Component } from './lib3childlib4component35.component';

describe('Lib3childlib4component35Component', () => {
  let component: Lib3childlib4component35Component;
  let fixture: ComponentFixture<Lib3childlib4component35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib4component35Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib4component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
