import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    { key: 'email', title: 'Email' },
    { key: 'role', title: 'Role' }
  ];

  constructor(private usersService: UsersService, private confirm: ConfirmationService, private router: Router) {
    this.users$ = this.usersService.getAll();
  }

  ngOnInit(): void {
    this.users$.subscribe(
      (users) => {
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        console.error('Error fetching users:', error);
      }
    );
  }
   onEdit(user: User): void {
    this.router.navigate([`/users/user/${user.id}`]);
  }

  onDelete(user: any): void {
    const dialogRef = this.confirm.openDialog({
      title: 'Deletion Confirmation',
      message: 'Are you sure you want to delete this user?',
      cancelButtonLabel: 'Cancel',
      confirmButtonLabel: 'Delete',
      onConfirm: () => {
        this.usersService.delete(user.id).then(() => {
          close()
        })
      }
    });
    const close = () => dialogRef.close();
  }
}
