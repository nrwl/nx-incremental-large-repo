import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib6component41Component } from './lib4childlib6component41.component';

describe('Lib4childlib6component41Component', () => {
  let component: Lib4childlib6component41Component;
  let fixture: ComponentFixture<Lib4childlib6component41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component41Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
