import { async, TestBed } from '@angular/core/testing';
import { Childlib5Module } from './childlib5.module';

describe('Childlib5Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Childlib5Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Childlib5Module).toBeDefined();
  });
});
