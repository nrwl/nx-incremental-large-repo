import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib7component43Component } from './lib3childlib7component43.component';

describe('Lib3childlib7component43Component', () => {
  let component: Lib3childlib7component43Component;
  let fixture: ComponentFixture<Lib3childlib7component43Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib7component43Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
