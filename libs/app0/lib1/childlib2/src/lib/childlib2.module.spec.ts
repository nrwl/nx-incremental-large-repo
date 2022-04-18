import { TestBed, waitForAsync } from '@angular/core/testing';
import { Childlib2Module } from './childlib2.module';

describe('Childlib2Module', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Childlib2Module],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Childlib2Module).toBeDefined();
  });
});
