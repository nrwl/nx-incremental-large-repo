import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib6component12Component } from './lib1childlib6component12.component';

describe('Lib1childlib6component12Component', () => {
  let component: Lib1childlib6component12Component;
  let fixture: ComponentFixture<Lib1childlib6component12Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib6component12Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib6component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
