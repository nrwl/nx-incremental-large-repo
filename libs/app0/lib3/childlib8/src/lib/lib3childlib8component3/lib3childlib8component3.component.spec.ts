import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib8component3Component } from './lib3childlib8component3.component';

describe('Lib3childlib8component3Component', () => {
  let component: Lib3childlib8component3Component;
  let fixture: ComponentFixture<Lib3childlib8component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib8component3Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib8component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
