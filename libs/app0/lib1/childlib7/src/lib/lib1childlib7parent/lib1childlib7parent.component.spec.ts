import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib7parentComponent } from './lib1childlib7parent.component';

describe('Lib1childlib7parentComponent', () => {
  let component: Lib1childlib7parentComponent;
  let fixture: ComponentFixture<Lib1childlib7parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib7parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
