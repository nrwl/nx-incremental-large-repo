import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib7component43Component } from './lib4childlib7component43.component';

describe('Lib4childlib7component43Component', () => {
  let component: Lib4childlib7component43Component;
  let fixture: ComponentFixture<Lib4childlib7component43Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component43Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
