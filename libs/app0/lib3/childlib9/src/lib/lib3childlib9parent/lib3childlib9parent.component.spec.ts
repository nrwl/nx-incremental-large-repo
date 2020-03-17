import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib9parentComponent } from './lib3childlib9parent.component';

describe('Lib3childlib9parentComponent', () => {
  let component: Lib3childlib9parentComponent;
  let fixture: ComponentFixture<Lib3childlib9parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib9parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
