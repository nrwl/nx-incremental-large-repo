import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib0parentComponent } from './lib2childlib0parent.component';

describe('Lib2childlib0parentComponent', () => {
  let component: Lib2childlib0parentComponent;
  let fixture: ComponentFixture<Lib2childlib0parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib0parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
