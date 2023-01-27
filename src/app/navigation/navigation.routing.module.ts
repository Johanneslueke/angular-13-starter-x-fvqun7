import { Injectable, NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  RouterModule,
  RouterStateSnapshot,
  Routes,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TestcasePageComponent } from '../testcase-execution/testcase-page/testcase-page.component';
import { NavigationPageComponent } from './navigation-page/navigation-page.component';

@Injectable()
export class CanActivateTeam implements CanActivateChild, CanActivate {
  constructor() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    alert('parent: ' + route.url);
    return true;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    alert('child: ' + route.url + '|| \n' + route.pathFromRoot);
    return true;
  }
}
const ROUTES: Routes = [
  { path: '', redirectTo: '/run', pathMatch: 'full' },
  {
    path: '',
    component: NavigationPageComponent,
    children: [
      {
        path: 'run',
        //component: TestcasePageComponent,
        //canActivate: [CanActivateTeam],
        loadChildren: () =>
          import('./../testcase-execution/testcase-execution.module').then(
            (m) => m.TestcaseExecutionModule
          ),
      },
      // {
      //   path: '**',
      //   component: TestcasePageComponent,
      // },
    ],
  },
  {
    path: '**',
    component: TestcasePageComponent,
    canActivate: [CanActivateTeam],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
  providers: [CanActivateTeam],
})
export class NavigationRoutingModule {}
