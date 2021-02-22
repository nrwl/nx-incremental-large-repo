import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib8component43Component } from './lib4childlib8component43.component';

describe('Lib4childlib8component43Component', () => {
  let component: Lib4childlib8component43Component;
  let fixture: ComponentFixture<Lib4childlib8component43Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib8component43Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib8component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
