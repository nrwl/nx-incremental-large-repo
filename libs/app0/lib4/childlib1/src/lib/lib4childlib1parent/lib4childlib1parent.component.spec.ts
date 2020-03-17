import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib1parentComponent } from './lib4childlib1parent.component';

describe('Lib4childlib1parentComponent', () => {
  let component: Lib4childlib1parentComponent;
  let fixture: ComponentFixture<Lib4childlib1parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib1parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
