import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestcaseListComponent } from './testcase-list/testcase-list.component';
import { TestcaseListItemComponent } from './testcase-list-item/testcase-list-item.component';



@NgModule({
  declarations: [
    TestcaseListComponent,
    TestcaseListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TestcaseExecutionModule { }
