import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib6component22Component } from './lib3childlib6component22.component';

describe('Lib3childlib6component22Component', () => {
  let component: Lib3childlib6component22Component;
  let fixture: ComponentFixture<Lib3childlib6component22Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib6component22Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib6component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
