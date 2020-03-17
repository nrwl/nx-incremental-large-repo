import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib7parentComponent } from './lib4childlib7parent.component';

describe('Lib4childlib7parentComponent', () => {
  let component: Lib4childlib7parentComponent;
  let fixture: ComponentFixture<Lib4childlib7parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
