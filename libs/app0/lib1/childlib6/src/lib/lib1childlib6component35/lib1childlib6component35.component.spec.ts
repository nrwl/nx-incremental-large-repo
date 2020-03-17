import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib6component35Component } from './lib1childlib6component35.component';

describe('Lib1childlib6component35Component', () => {
  let component: Lib1childlib6component35Component;
  let fixture: ComponentFixture<Lib1childlib6component35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib6component35Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib6component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
