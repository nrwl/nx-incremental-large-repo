import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib7component21Component } from './lib4childlib7component21.component';

describe('Lib4childlib7component21Component', () => {
  let component: Lib4childlib7component21Component;
  let fixture: ComponentFixture<Lib4childlib7component21Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component21Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
