import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcaseListComponent } from './testcase-list.component';

describe('TestcaseListComponent', () => {
  let component: TestcaseListComponent;
  let fixture: ComponentFixture<TestcaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcaseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
