import { TestBed, waitForAsync } from '@angular/core/testing';
import { Childlib5Module } from './childlib5.module';

describe('Childlib5Module', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Childlib5Module],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Childlib5Module).toBeDefined();
  });
});
