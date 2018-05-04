
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavComponent } from './pwa-nav.component';

describe('PwaNavComponent', () => {
  let component: AppNavComponent;
  let fixture: ComponentFixture<AppNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
