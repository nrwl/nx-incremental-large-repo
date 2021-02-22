import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib6component22Component } from './lib2childlib6component22.component';

describe('Lib2childlib6component22Component', () => {
  let component: Lib2childlib6component22Component;
  let fixture: ComponentFixture<Lib2childlib6component22Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib6component22Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib6component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
