import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib0component4Component } from './lib4childlib0component4.component';

describe('Lib4childlib0component4Component', () => {
  let component: Lib4childlib0component4Component;
  let fixture: ComponentFixture<Lib4childlib0component4Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib0component4Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib0component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
