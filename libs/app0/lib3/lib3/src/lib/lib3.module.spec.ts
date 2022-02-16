import { TestBed, waitForAsync } from '@angular/core/testing';
import { Lib3Module } from './lib3.module';

describe('Lib3Module', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [Lib3Module],
        teardown: { destroyAfterEach: false },
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(Lib3Module).toBeDefined();
  });
});
