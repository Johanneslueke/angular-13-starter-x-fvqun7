import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationPageComponent } from './navigation-page/navigation-page.component';
import { NavigationRoutingModule } from './navigation.routing.module';

@NgModule({
  declarations: [NavigationPageComponent],
  imports: [CommonModule, NavigationRoutingModule],
  exports: [NavigationPageComponent],
})
export class NavigationModule {}
