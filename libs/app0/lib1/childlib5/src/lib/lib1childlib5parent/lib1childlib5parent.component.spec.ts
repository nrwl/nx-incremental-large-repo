import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib5parentComponent } from './lib1childlib5parent.component';

describe('Lib1childlib5parentComponent', () => {
  let component: Lib1childlib5parentComponent;
  let fixture: ComponentFixture<Lib1childlib5parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib5parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
