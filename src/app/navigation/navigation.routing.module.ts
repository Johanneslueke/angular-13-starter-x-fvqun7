import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPageComponent } from './navigation-page/navigation-page.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/run', pathMatch: 'full' },
  {
    path: '',
    component: NavigationPageComponent,
    children: [
      {
        path: 'run',
        loadChildren: () =>
          import('./../testcase-execution/testcase-execution.module').then(
            (m) => m.TestcaseExecutionModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class NavigationRoutingModule {}
