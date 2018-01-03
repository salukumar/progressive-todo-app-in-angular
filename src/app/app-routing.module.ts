import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule' },
{ path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
