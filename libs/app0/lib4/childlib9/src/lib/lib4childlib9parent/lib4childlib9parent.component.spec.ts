import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib9parentComponent } from './lib4childlib9parent.component';

describe('Lib4childlib9parentComponent', () => {
  let component: Lib4childlib9parentComponent;
  let fixture: ComponentFixture<Lib4childlib9parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib9parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
