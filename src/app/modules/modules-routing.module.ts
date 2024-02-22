import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleFormComponent } from './components/module-form/module-form.component';
import { ModulesPageComponent } from './components/modules-page/modules-page.component';

const routes: Routes = [{ path: '', component: ModulesPageComponent },
  {
    path: 'module',
    component: ModuleFormComponent
  },
  {
    path: 'module/:id',
    component: ModuleFormComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
