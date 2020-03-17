import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib7component28Component } from './lib2childlib7component28.component';

describe('Lib2childlib7component28Component', () => {
  let component: Lib2childlib7component28Component;
  let fixture: ComponentFixture<Lib2childlib7component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib7component28Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib7component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
