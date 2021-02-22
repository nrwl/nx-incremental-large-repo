import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib3parentComponent } from './lib3childlib3parent.component';

describe('Lib3childlib3parentComponent', () => {
  let component: Lib3childlib3parentComponent;
  let fixture: ComponentFixture<Lib3childlib3parentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib3parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
