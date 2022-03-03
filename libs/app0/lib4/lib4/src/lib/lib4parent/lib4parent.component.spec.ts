import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4parentComponent } from './lib4parent.component';

describe('Lib4parentComponent', () => {
  let component: Lib4parentComponent;
  let fixture: ComponentFixture<Lib4parentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Lib4parentComponent],
        teardown: { destroyAfterEach: false },
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
