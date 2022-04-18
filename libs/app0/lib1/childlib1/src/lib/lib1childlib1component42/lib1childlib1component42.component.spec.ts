import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib1component42Component } from './lib1childlib1component42.component';

describe('Lib1childlib1component42Component', () => {
  let component: Lib1childlib1component42Component;
  let fixture: ComponentFixture<Lib1childlib1component42Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib1component42Component],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib1component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
