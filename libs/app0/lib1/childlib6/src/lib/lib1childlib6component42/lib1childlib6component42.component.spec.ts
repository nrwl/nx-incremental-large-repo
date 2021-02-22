import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib6component42Component } from './lib1childlib6component42.component';

describe('Lib1childlib6component42Component', () => {
  let component: Lib1childlib6component42Component;
  let fixture: ComponentFixture<Lib1childlib6component42Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib6component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib6component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
