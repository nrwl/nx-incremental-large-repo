import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib5parentComponent } from './lib4childlib5parent.component';

describe('Lib4childlib5parentComponent', () => {
  let component: Lib4childlib5parentComponent;
  let fixture: ComponentFixture<Lib4childlib5parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
