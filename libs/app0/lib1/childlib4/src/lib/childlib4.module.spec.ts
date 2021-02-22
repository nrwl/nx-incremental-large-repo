import { TestBed, waitForAsync } from '@angular/core/testing';
import { Childlib4Module } from './childlib4.module';

describe('Childlib4Module', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Childlib4Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Childlib4Module).toBeDefined();
  });
});
