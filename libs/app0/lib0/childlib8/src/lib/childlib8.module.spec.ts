import { TestBed, waitForAsync } from '@angular/core/testing';
import { Childlib8Module } from './childlib8.module';

describe('Childlib8Module', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Childlib8Module],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Childlib8Module).toBeDefined();
  });
});
