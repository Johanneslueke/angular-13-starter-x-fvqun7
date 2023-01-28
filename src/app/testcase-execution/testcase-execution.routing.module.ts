import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestcasePageComponent } from './testcase-page/testcase-page.component';

const ROUTES: Routes = [
  {
    path: '',
    component: TestcasePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class TestCaseExcecutionRoutingModule {}
