import { async, TestBed } from '@angular/core/testing';
import { Childlib8Module } from './childlib8.module';

describe('Childlib8Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Childlib8Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Childlib8Module).toBeDefined();
  });
});
