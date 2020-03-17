import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib8component35Component } from './lib3childlib8component35.component';

describe('Lib3childlib8component35Component', () => {
  let component: Lib3childlib8component35Component;
  let fixture: ComponentFixture<Lib3childlib8component35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib8component35Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib8component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
