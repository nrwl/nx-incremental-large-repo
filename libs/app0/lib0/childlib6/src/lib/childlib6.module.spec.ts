import { async, TestBed } from '@angular/core/testing';
import { Childlib6Module } from './childlib6.module';

describe('Childlib6Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Childlib6Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Childlib6Module).toBeDefined();
  });
});
