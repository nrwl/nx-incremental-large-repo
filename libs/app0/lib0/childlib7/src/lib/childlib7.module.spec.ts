import { TestBed, waitForAsync } from '@angular/core/testing';
import { Childlib7Module } from './childlib7.module';

describe('Childlib7Module', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Childlib7Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Childlib7Module).toBeDefined();
  });
});
