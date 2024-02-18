import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
      { path: 'teams', loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule) },
      { path: 'modules', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule) },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]
  },
  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
