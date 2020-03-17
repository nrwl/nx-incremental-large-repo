import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib3parentComponent } from './lib1childlib3parent.component';

describe('Lib1childlib3parentComponent', () => {
  let component: Lib1childlib3parentComponent;
  let fixture: ComponentFixture<Lib1childlib3parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib3parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
