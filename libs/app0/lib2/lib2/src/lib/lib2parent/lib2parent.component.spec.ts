import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2parentComponent } from './lib2parent.component';

describe('Lib2parentComponent', () => {
  let component: Lib2parentComponent;
  let fixture: ComponentFixture<Lib2parentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
