import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib5parentComponent } from './lib0childlib5parent.component';

describe('Lib0childlib5parentComponent', () => {
  let component: Lib0childlib5parentComponent;
  let fixture: ComponentFixture<Lib0childlib5parentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib5parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
