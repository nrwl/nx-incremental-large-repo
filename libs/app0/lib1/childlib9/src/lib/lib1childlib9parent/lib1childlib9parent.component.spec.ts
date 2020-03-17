import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib9parentComponent } from './lib1childlib9parent.component';

describe('Lib1childlib9parentComponent', () => {
  let component: Lib1childlib9parentComponent;
  let fixture: ComponentFixture<Lib1childlib9parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib9parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
