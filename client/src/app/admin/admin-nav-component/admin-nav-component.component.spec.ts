import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavComponentComponent } from './admin-nav-component.component';

describe('AdminNavComponentComponent', () => {
  let component: AdminNavComponentComponent;
  let fixture: ComponentFixture<AdminNavComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNavComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
