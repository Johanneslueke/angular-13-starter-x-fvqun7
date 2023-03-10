import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationPageComponent } from './navigation-page/navigation-page.component';
import { NavigationRoutingModule } from './navigation.routing.module';
import { TestcaseExecutionModule } from '../testcase-execution/testcase-execution.module';

@NgModule({
  declarations: [NavigationPageComponent],
  imports: [NavigationRoutingModule, CommonModule, RouterModule],
  exports: [NavigationPageComponent],
})
export class NavigationModule {}
