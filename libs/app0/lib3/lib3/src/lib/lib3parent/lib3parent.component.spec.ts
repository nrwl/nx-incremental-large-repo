import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3parentComponent } from './lib3parent.component';

describe('Lib3parentComponent', () => {
  let component: Lib3parentComponent;
  let fixture: ComponentFixture<Lib3parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
