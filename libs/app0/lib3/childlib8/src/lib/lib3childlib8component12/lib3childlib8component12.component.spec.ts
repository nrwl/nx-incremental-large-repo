import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib8component12Component } from './lib3childlib8component12.component';

describe('Lib3childlib8component12Component', () => {
  let component: Lib3childlib8component12Component;
  let fixture: ComponentFixture<Lib3childlib8component12Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib8component12Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib8component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
