import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskConComponent } from './add-task-con.component';

describe('AddTaskConComponent', () => {
  let component: AddTaskConComponent;
  let fixture: ComponentFixture<AddTaskConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTaskConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
