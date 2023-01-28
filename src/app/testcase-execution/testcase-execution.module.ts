import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestcaseListComponent } from './testcase-list/testcase-list.component';
import { TestcaseListItemComponent } from './testcase-list-item/testcase-list-item.component';
import { TestcasePageComponent } from './testcase-page/testcase-page.component';
import { TestCaseExcecutionRoutingModule } from './testcase-execution.routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FileUploadComponent } from './file-upload/file-upload.component';
@NgModule({
  declarations: [
    TestcasePageComponent,
    TestcaseListComponent,
    TestcaseListItemComponent,
    FileUploadComponent,
  ],
  imports: [CommonModule, MatCardModule, MatDividerModule],
  exports: [TestcasePageComponent, TestCaseExcecutionRoutingModule],
})
export class TestcaseExecutionModule {}
