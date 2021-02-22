import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib0component4Component } from './lib3childlib0component4.component';

describe('Lib3childlib0component4Component', () => {
  let component: Lib3childlib0component4Component;
  let fixture: ComponentFixture<Lib3childlib0component4Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib0component4Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib0component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
