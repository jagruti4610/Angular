import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

import { AbcComponent } from './abc/abc.component';


const routes: Routes = [{path:'abc', component:AbcComponent}, {path:'welcome', component: WelcomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
