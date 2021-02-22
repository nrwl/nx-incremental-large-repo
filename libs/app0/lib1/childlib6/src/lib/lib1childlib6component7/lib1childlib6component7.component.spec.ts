import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib6component7Component } from './lib1childlib6component7.component';

describe('Lib1childlib6component7Component', () => {
  let component: Lib1childlib6component7Component;
  let fixture: ComponentFixture<Lib1childlib6component7Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib6component7Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib6component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
