import { async, TestBed } from '@angular/core/testing';
import { Childlib9Module } from './childlib9.module';

describe('Childlib9Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Childlib9Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Childlib9Module).toBeDefined();
  });
});
