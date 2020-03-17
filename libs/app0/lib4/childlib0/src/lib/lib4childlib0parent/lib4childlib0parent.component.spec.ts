import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib0parentComponent } from './lib4childlib0parent.component';

describe('Lib4childlib0parentComponent', () => {
  let component: Lib4childlib0parentComponent;
  let fixture: ComponentFixture<Lib4childlib0parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib0parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
