import { TestBed, waitForAsync } from '@angular/core/testing';
import { Childlib1Module } from './childlib1.module';

describe('Childlib1Module', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Childlib1Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Childlib1Module).toBeDefined();
  });
});
