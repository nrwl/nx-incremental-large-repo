import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib7parentComponent } from './lib0childlib7parent.component';

describe('Lib0childlib7parentComponent', () => {
  let component: Lib0childlib7parentComponent;
  let fixture: ComponentFixture<Lib0childlib7parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib7parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
