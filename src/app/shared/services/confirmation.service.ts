import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationComponent } from '../components/confirmation/confirmation.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  constructor(private dialog: MatDialog) {}

  openDialog(data: {
    title: string;
    message: string;
    cancelButtonLabel: string;
    confirmButtonLabel: string;
    onConfirm: () => void;
  }): MatDialogRef<any> {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '300px',
      data: data,
    });
    return dialogRef;
  }
}
