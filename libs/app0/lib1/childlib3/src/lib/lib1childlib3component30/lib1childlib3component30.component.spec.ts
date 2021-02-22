import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib3component30Component } from './lib1childlib3component30.component';

describe('Lib1childlib3component30Component', () => {
  let component: Lib1childlib3component30Component;
  let fixture: ComponentFixture<Lib1childlib3component30Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib3component30Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib3component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
