import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib6component31Component } from './lib4childlib6component31.component';

describe('Lib4childlib6component31Component', () => {
  let component: Lib4childlib6component31Component;
  let fixture: ComponentFixture<Lib4childlib6component31Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component31Component],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
