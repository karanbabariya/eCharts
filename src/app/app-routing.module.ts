import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { Graphics1Component } from './graphics1/graphics1.component';
import { Graphics2Component } from './graphics2/graphics2.component';


const routes: Route[] = [
	{path: '', redirectTo: '/graphic1', pathMatch: 'full'},
	{path: 'graphic1', component: Graphics1Component},
	{path: 'graphic2', component: Graphics2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
