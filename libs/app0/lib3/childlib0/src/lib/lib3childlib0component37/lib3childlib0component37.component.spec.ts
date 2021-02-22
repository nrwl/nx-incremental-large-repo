import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib0component37Component } from './lib3childlib0component37.component';

describe('Lib3childlib0component37Component', () => {
  let component: Lib3childlib0component37Component;
  let fixture: ComponentFixture<Lib3childlib0component37Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib0component37Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib0component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
