import { TestBed, waitForAsync } from '@angular/core/testing';
import { Lib0Module } from './lib0.module';

describe('Lib0Module', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Lib0Module],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib0Module).toBeDefined();
  });
});
