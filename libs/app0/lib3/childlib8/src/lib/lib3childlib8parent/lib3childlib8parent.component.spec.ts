import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib8parentComponent } from './lib3childlib8parent.component';

describe('Lib3childlib8parentComponent', () => {
  let component: Lib3childlib8parentComponent;
  let fixture: ComponentFixture<Lib3childlib8parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib8parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
