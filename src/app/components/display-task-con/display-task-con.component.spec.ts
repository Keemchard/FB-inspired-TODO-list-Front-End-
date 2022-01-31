import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTaskConComponent } from './display-task-con.component';

describe('DisplayTaskConComponent', () => {
  let component: DisplayTaskConComponent;
  let fixture: ComponentFixture<DisplayTaskConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTaskConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTaskConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
