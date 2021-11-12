import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Lib0Module } from '@largerepo/app0/lib0/lib0';
import { Lib1Module } from '@largerepo/app0/lib1/lib1';
import { Lib2Module } from '@largerepo/app0/lib2/lib2';
import { Lib3Module } from '@largerepo/app0/lib3/lib3';
import { Lib4Module } from '@largerepo/app0/lib4/lib4';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [Lib0Module, Lib1Module, Lib2Module, Lib3Module, Lib4Module],
      }).compileComponents();
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app0'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app0');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to app0!'
    );
  });
});
