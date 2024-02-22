import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { ConfirmationService } from 'src/app/shared/services/confirmation.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  users$: Observable<User[]>;
  isLoading = true;

  columns = [
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' }
  ];

  constructor(private usersService: UsersService, private confirm: ConfirmationService) {
    this.users$ = this.usersService.getAll();
  }

  ngOnInit(): void {
    this.users$.subscribe(
      (users) => {
        this.isLoading = false; // Handle next value
      },
      (error) => {
        this.isLoading = false; // Handle error
        console.error('Error fetching users:', error);
      }
    );
  }
   onEdit(user: any): void {
    // Handle edit action
  }

  onDelete(user: any): void {
    const dialogRef = this.confirm.openDialog({
      title: 'Confirm Action',
      message: 'Are you sure you want to do this?',
      cancelButtonLabel: 'Cancel',
      confirmButtonLabel: 'Yes, do it',
      onConfirm: () => {
        console.log('Action confirmed');
        close()
      }
    });
    const close = () => dialogRef.close();
  }
}
