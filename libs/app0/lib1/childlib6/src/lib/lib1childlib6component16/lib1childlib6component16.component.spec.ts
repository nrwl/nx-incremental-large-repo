import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib6component16Component } from './lib1childlib6component16.component';

describe('Lib1childlib6component16Component', () => {
  let component: Lib1childlib6component16Component;
  let fixture: ComponentFixture<Lib1childlib6component16Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib6component16Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib6component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
