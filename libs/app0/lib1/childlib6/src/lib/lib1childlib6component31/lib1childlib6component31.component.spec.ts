import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib6component31Component } from './lib1childlib6component31.component';

describe('Lib1childlib6component31Component', () => {
  let component: Lib1childlib6component31Component;
  let fixture: ComponentFixture<Lib1childlib6component31Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib6component31Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib6component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
