import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib6component11Component } from './lib3childlib6component11.component';

describe('Lib3childlib6component11Component', () => {
  let component: Lib3childlib6component11Component;
  let fixture: ComponentFixture<Lib3childlib6component11Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib6component11Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib6component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
