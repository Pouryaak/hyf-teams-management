import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import Angular Material modules used in your shared components
import { RouterModule } from '@angular/router'; // Import RouterModule if you're using routerLink in your components
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FlexContainerComponent } from './components/flex-container/flex-container.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


@NgModule({
  declarations: [ToolbarComponent, SidenavComponent, DashboardComponent, PageHeaderComponent, FlexContainerComponent, CustomTableComponent, ConfirmationComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDialogModule

  ],
  exports: [
    DashboardComponent,
    ToolbarComponent,
    SidenavComponent,
    PageHeaderComponent,
    FlexContainerComponent,
    CustomTableComponent
  ],
})
export class SharedModule {}
