import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1parentComponent } from './lib0childlib1parent.component';

describe('Lib0childlib1parentComponent', () => {
  let component: Lib0childlib1parentComponent;
  let fixture: ComponentFixture<Lib0childlib1parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
