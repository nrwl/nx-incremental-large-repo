import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib6component10Component } from './lib4childlib6component10.component';

describe('Lib4childlib6component10Component', () => {
  let component: Lib4childlib6component10Component;
  let fixture: ComponentFixture<Lib4childlib6component10Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component10Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
