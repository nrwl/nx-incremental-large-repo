import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2parentComponent } from './lib2childlib2parent.component';

describe('Lib2childlib2parentComponent', () => {
  let component: Lib2childlib2parentComponent;
  let fixture: ComponentFixture<Lib2childlib2parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
