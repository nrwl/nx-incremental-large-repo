import { async, TestBed } from '@angular/core/testing';
import { Childlib0Module } from './childlib0.module';

describe('Childlib0Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Childlib0Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Childlib0Module).toBeDefined();
  });
});
