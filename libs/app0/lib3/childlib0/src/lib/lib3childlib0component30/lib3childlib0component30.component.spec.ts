import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib0component30Component } from './lib3childlib0component30.component';

describe('Lib3childlib0component30Component', () => {
  let component: Lib3childlib0component30Component;
  let fixture: ComponentFixture<Lib3childlib0component30Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib0component30Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib0component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
