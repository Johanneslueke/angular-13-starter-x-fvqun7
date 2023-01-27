import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestcaseListComponent } from './testcase-list/testcase-list.component';
import { TestcaseListItemComponent } from './testcase-list-item/testcase-list-item.component';
import { TestcasePageComponent } from './testcase-page/testcase-page.component';
import { TestCaseExcecutionRoutingModule } from './testcase-execution.routing.module';

@NgModule({
  declarations: [
    TestcaseListComponent,
    TestcaseListItemComponent,
    TestcasePageComponent,
  ],
  imports: [CommonModule, TestCaseExcecutionRoutingModule],
  exports: [TestCaseExcecutionRoutingModule],
})
export class TestcaseExecutionModule {}
