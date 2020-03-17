import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib4parentComponent } from './lib1childlib4parent.component';

describe('Lib1childlib4parentComponent', () => {
  let component: Lib1childlib4parentComponent;
  let fixture: ComponentFixture<Lib1childlib4parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib4parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
