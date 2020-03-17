import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib4parentComponent } from './lib0childlib4parent.component';

describe('Lib0childlib4parentComponent', () => {
  let component: Lib0childlib4parentComponent;
  let fixture: ComponentFixture<Lib0childlib4parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib4parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
