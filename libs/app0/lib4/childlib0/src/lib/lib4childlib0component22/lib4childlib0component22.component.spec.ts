import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib0component22Component } from './lib4childlib0component22.component';

describe('Lib4childlib0component22Component', () => {
  let component: Lib4childlib0component22Component;
  let fixture: ComponentFixture<Lib4childlib0component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib0component22Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib0component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
