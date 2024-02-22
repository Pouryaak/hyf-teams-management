import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Module } from 'src/app/core/models/module.model';
import { ConfirmationService } from 'src/app/shared/services/confirmation.service';
import { ModulesService } from '../../service/modules.service';

@Component({
  selector: 'app-modules-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.scss'],
})
export class ModulesListComponent implements OnInit {
  modules$: Observable<Module[]>;
  isLoading = true;

  columns = [
    { key: 'name', title: 'Name' },
    // { key: 'startingDate', title: 'Start' },
    // { key: 'endingDate', title: 'End' },
  ];

  constructor(
    private ms: ModulesService,
    private confirm: ConfirmationService,
    private router: Router
  ) {
    this.modules$ = this.ms.getAll();
  }

  ngOnInit(): void {
    this.modules$.subscribe(
      (modules) => {
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        console.error('Error fetching users:', error);
      }
    );
  }

  onEdit(module: Module): void {
    this.router.navigate([`/modules/module/${module.id}`]);
  }

  onDelete(user: any): void {
    const dialogRef = this.confirm.openDialog({
      title: 'Deletion Confirmation',
      message: 'Are you sure you want to delete this module?',
      cancelButtonLabel: 'Cancel',
      confirmButtonLabel: 'Delete',
      onConfirm: () => {
        this.ms.delete(user.id).then(() => {
          close()
        })
      }
    });
    const close = () => dialogRef.close();
  }


}
