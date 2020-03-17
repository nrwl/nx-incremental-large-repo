import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib9parentComponent } from './lib2childlib9parent.component';

describe('Lib2childlib9parentComponent', () => {
  let component: Lib2childlib9parentComponent;
  let fixture: ComponentFixture<Lib2childlib9parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib9parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
