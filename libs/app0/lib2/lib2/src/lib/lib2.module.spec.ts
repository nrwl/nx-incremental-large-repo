import { TestBed, waitForAsync } from '@angular/core/testing';
import { Lib2Module } from './lib2.module';

describe('Lib2Module', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Lib2Module],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib2Module).toBeDefined();
  });
});
