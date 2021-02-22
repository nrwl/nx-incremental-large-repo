import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib6component40Component } from './lib3childlib6component40.component';

describe('Lib3childlib6component40Component', () => {
  let component: Lib3childlib6component40Component;
  let fixture: ComponentFixture<Lib3childlib6component40Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib6component40Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib6component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
