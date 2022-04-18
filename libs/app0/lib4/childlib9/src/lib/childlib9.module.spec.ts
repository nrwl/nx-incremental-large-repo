import { TestBed, waitForAsync } from '@angular/core/testing';
import { Childlib9Module } from './childlib9.module';

describe('Childlib9Module', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Childlib9Module],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Childlib9Module).toBeDefined();
  });
});
