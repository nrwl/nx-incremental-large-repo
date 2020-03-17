import { async, TestBed } from '@angular/core/testing';
import { Childlib3Module } from './childlib3.module';

describe('Childlib3Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Childlib3Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Childlib3Module).toBeDefined();
  });
});
