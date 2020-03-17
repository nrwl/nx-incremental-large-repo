import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib6component4Component } from './lib1childlib6component4.component';

describe('Lib1childlib6component4Component', () => {
  let component: Lib1childlib6component4Component;
  let fixture: ComponentFixture<Lib1childlib6component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib6component4Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib6component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
