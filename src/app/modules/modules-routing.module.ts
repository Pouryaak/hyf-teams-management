import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesPageComponent } from './components/modules-page/modules-page.component';

const routes: Routes = [{ path: '', component: ModulesPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
