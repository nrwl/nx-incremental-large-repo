import { async, TestBed } from '@angular/core/testing';
import { Childlib2Module } from './childlib2.module';

describe('Childlib2Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Childlib2Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Childlib2Module).toBeDefined();
  });
});
