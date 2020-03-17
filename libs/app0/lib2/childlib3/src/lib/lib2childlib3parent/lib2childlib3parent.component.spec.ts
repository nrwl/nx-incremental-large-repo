import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib3parentComponent } from './lib2childlib3parent.component';

describe('Lib2childlib3parentComponent', () => {
  let component: Lib2childlib3parentComponent;
  let fixture: ComponentFixture<Lib2childlib3parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib3parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
