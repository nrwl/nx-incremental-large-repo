import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib3parentComponent } from './lib4childlib3parent.component';

describe('Lib4childlib3parentComponent', () => {
  let component: Lib4childlib3parentComponent;
  let fixture: ComponentFixture<Lib4childlib3parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
