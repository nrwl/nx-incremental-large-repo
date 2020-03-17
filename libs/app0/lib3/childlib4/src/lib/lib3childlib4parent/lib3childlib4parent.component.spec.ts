import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib4parentComponent } from './lib3childlib4parent.component';

describe('Lib3childlib4parentComponent', () => {
  let component: Lib3childlib4parentComponent;
  let fixture: ComponentFixture<Lib3childlib4parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib4parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
