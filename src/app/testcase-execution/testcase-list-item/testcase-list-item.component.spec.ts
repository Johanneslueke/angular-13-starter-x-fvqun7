import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcaseListItemComponent } from './testcase-list-item.component';

describe('TestcaseListItemComponent', () => {
  let component: TestcaseListItemComponent;
  let fixture: ComponentFixture<TestcaseListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcaseListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcaseListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
