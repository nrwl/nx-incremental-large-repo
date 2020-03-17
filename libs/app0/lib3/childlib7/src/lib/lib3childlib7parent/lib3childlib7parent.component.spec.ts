import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib7parentComponent } from './lib3childlib7parent.component';

describe('Lib3childlib7parentComponent', () => {
  let component: Lib3childlib7parentComponent;
  let fixture: ComponentFixture<Lib3childlib7parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib7parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
