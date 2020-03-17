import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib5parentComponent } from './lib3childlib5parent.component';

describe('Lib3childlib5parentComponent', () => {
  let component: Lib3childlib5parentComponent;
  let fixture: ComponentFixture<Lib3childlib5parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib5parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
