import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib2parentComponent } from './lib0childlib2parent.component';

describe('Lib0childlib2parentComponent', () => {
  let component: Lib0childlib2parentComponent;
  let fixture: ComponentFixture<Lib0childlib2parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib2parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
