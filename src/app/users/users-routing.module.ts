import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersPageComponent } from './components/users-page/users-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent
  },
  {
    path: 'user',
    component: UserFormComponent
  },
  {
    path: 'user/:id',
    component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
