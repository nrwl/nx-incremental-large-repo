import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib7component46Component } from './lib3childlib7component46.component';

describe('Lib3childlib7component46Component', () => {
  let component: Lib3childlib7component46Component;
  let fixture: ComponentFixture<Lib3childlib7component46Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib7component46Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7component46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
