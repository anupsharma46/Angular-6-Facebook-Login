import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {FbloginComponent} from './fblogin/fblogin.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: FbloginComponent },
  { path: 'fbLogin', component: FbloginComponent },
  { path: 'home', component: HomeComponent },
  {path: '**', component: FbloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
