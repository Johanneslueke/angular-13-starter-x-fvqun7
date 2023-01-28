import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavigationModule } from './navigation/navigation.module';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPageComponent } from './navigation/navigation-page/navigation-page.component';
import { HttpClientModule } from '@angular/common/http';

const ROUTES: Routes = [
  { path: '', redirectTo: 'run', pathMatch: 'full' },
  // { path: '', component: NavigationPageComponent },
  // { path: '**', component: NavigationPageComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NavigationModule,
    MatFormFieldModule,
    MatInputModule,

    RouterModule.forRoot(ROUTES),
  ],
  exports: [RouterModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
