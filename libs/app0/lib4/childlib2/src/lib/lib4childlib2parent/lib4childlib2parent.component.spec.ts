import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2parentComponent } from './lib4childlib2parent.component';

describe('Lib4childlib2parentComponent', () => {
  let component: Lib4childlib2parentComponent;
  let fixture: ComponentFixture<Lib4childlib2parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
