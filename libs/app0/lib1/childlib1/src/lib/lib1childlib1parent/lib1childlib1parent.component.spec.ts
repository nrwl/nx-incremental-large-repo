import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib1parentComponent } from './lib1childlib1parent.component';

describe('Lib1childlib1parentComponent', () => {
  let component: Lib1childlib1parentComponent;
  let fixture: ComponentFixture<Lib1childlib1parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib1parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
