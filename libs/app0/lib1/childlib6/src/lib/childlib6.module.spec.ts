import { TestBed, waitForAsync } from '@angular/core/testing';
import { Childlib6Module } from './childlib6.module';

describe('Childlib6Module', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Childlib6Module],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Childlib6Module).toBeDefined();
  });
});
