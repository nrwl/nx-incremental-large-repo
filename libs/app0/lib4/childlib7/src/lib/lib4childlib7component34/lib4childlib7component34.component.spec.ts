import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib7component34Component } from './lib4childlib7component34.component';

describe('Lib4childlib7component34Component', () => {
  let component: Lib4childlib7component34Component;
  let fixture: ComponentFixture<Lib4childlib7component34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component34Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
