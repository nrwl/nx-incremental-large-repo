import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib2component15Component } from './lib4childlib2component15.component';

describe('Lib4childlib2component15Component', () => {
  let component: Lib4childlib2component15Component;
  let fixture: ComponentFixture<Lib4childlib2component15Component>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Lib4childlib2component15Component],
        teardown: { destroyAfterEach: false },
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
