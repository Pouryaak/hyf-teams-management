import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../shared/shared.module';
import { ModuleFormComponent } from './components/module-form/module-form.component';
import { ModulesListComponent } from './components/modules-list/modules-list.component';
import { ModulesPageComponent } from './components/modules-page/modules-page.component';
import { ModulesRoutingModule } from './modules-routing.module';


@NgModule({
  declarations: [
    ModulesPageComponent,
    ModulesListComponent,
    ModuleFormComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class ModulesModule { }
