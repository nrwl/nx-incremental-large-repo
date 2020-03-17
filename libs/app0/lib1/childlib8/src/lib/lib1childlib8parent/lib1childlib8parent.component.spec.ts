import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib8parentComponent } from './lib1childlib8parent.component';

describe('Lib1childlib8parentComponent', () => {
  let component: Lib1childlib8parentComponent;
  let fixture: ComponentFixture<Lib1childlib8parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib8parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
