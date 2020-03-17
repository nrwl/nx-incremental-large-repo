import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib6parentComponent } from './lib1childlib6parent.component';

describe('Lib1childlib6parentComponent', () => {
  let component: Lib1childlib6parentComponent;
  let fixture: ComponentFixture<Lib1childlib6parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib6parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
