import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib7component30Component } from './lib4childlib7component30.component';

describe('Lib4childlib7component30Component', () => {
  let component: Lib4childlib7component30Component;
  let fixture: ComponentFixture<Lib4childlib7component30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component30Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
