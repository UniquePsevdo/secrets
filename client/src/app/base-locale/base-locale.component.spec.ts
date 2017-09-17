import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLocaleComponent } from './base-locale.component';

describe('BaseLocaleComponent', () => {
  let component: BaseLocaleComponent;
  let fixture: ComponentFixture<BaseLocaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseLocaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseLocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
