import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib9component4Component } from './lib1childlib9component4.component';

describe('Lib1childlib9component4Component', () => {
  let component: Lib1childlib9component4Component;
  let fixture: ComponentFixture<Lib1childlib9component4Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib9component4Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib9component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
