import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib6parentComponent } from './lib2childlib6parent.component';

describe('Lib2childlib6parentComponent', () => {
  let component: Lib2childlib6parentComponent;
  let fixture: ComponentFixture<Lib2childlib6parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib6parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
