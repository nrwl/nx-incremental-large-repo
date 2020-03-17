import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib2parentComponent } from './lib3childlib2parent.component';

describe('Lib3childlib2parentComponent', () => {
  let component: Lib3childlib2parentComponent;
  let fixture: ComponentFixture<Lib3childlib2parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib2parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
