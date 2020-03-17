import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib7component29Component } from './lib3childlib7component29.component';

describe('Lib3childlib7component29Component', () => {
  let component: Lib3childlib7component29Component;
  let fixture: ComponentFixture<Lib3childlib7component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib7component29Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
