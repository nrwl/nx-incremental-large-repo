import { TestBed, waitForAsync } from '@angular/core/testing';
import { Lib1Module } from './lib1.module';

describe('Lib1Module', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [Lib1Module],
        teardown: { destroyAfterEach: false },
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(Lib1Module).toBeDefined();
  });
});
