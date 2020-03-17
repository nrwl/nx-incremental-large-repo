import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib0parentComponent } from './lib1childlib0parent.component';

describe('Lib1childlib0parentComponent', () => {
  let component: Lib1childlib0parentComponent;
  let fixture: ComponentFixture<Lib1childlib0parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib0parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
