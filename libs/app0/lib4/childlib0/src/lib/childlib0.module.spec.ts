import { TestBed, waitForAsync } from '@angular/core/testing';
import { Childlib0Module } from './childlib0.module';

describe('Childlib0Module', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Childlib0Module],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Childlib0Module).toBeDefined();
  });
});
