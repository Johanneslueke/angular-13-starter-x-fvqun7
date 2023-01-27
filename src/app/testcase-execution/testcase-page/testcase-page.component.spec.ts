import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcasePageComponent } from './testcase-page.component';

describe('TestcasePageComponent', () => {
  let component: TestcasePageComponent;
  let fixture: ComponentFixture<TestcasePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcasePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
