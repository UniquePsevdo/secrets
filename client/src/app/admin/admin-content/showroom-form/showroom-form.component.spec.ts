import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomFormComponent } from './showroom-form.component';

describe('ShowroomFormComponent', () => {
  let component: ShowroomFormComponent;
  let fixture: ComponentFixture<ShowroomFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowroomFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowroomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
