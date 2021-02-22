import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib0parentComponent } from './lib3childlib0parent.component';

describe('Lib3childlib0parentComponent', () => {
  let component: Lib3childlib0parentComponent;
  let fixture: ComponentFixture<Lib3childlib0parentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib0parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
