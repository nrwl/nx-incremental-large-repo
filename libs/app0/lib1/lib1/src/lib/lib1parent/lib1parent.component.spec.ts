import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1parentComponent } from './lib1parent.component';

describe('Lib1parentComponent', () => {
  let component: Lib1parentComponent;
  let fixture: ComponentFixture<Lib1parentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1parentComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
