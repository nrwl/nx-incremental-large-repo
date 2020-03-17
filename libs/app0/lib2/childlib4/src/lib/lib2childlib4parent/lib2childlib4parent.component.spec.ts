import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib4parentComponent } from './lib2childlib4parent.component';

describe('Lib2childlib4parentComponent', () => {
  let component: Lib2childlib4parentComponent;
  let fixture: ComponentFixture<Lib2childlib4parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
