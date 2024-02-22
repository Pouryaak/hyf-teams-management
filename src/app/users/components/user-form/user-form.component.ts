import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Role } from 'src/app/core/models/user.model';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  userForm: FormGroup = this.fb.group({
    id: [''], // Assuming ID is auto-generated or not needed on form
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['', Validators.required],
  });
  roles = [Role.LT, Role.TA, Role.HWR];
  userId: string | null = null;
  private routeSub!: Subscription;
  isLoading: boolean = false;
  submitButtonDisabled: boolean = false;
  private loadingSub!: Subscription;


  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private usersService: UsersService,
    private ns: NotificationService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingSub = this.loadingService.loading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
    this.routeSub = this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      if (this.userId) {
        this.fetchUserData(this.userId);
      }
    });
  }

  fetchUserData(userId: string) {
    this.loadingService.show();
    this.usersService.get(userId).subscribe({
      next: (user) => {
        if (user) {
          this.loadingService.hide();
          this.userForm.patchValue({
            id: userId,
            name: user.name,
            email: user.email,
            role: user.role,
          });
        } else {
           this.loadingService.hide();
          this.ns.showError('User not found.');
        }
      },
      error: (error) => {
        console.error('Error fetching user:', error);
        this.ns.showError('Error fetching user details. Please try again.');
      }
    });
  }

  onSubmit() {
    this.submitButtonDisabled = true;
    if (this.userForm.valid) {
      if (this.userId) {
        this.usersService
          .update(this.userId, this.userForm.value)
          .then(() => {
            this.ns.showSuccess('User updated successfully!');
            this.submitButtonDisabled = false;
          })
          .catch((error) => {
            this.ns.showError('Failed to update user. Please try again.');
            console.error('Error updating user:', error);
            this.submitButtonDisabled = false;
          });
      } else {
        this.usersService
          .addUserIfNotExists(this.userForm.value)
          .then(() => {
            this.ns.showSuccess('User added successfully!');
            this.userForm.reset();
            this.submitButtonDisabled = false;
          })
          .catch((error) => {
            this.submitButtonDisabled = false;
            if (error === 'User with this email already exists.') {
              this.ns.showError(error);
            } else {
              this.ns.showError('Failed to add user. Please try again.');
            }
            console.error('Error adding user:', error);
          });
      }
    }
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
     if (this.loadingSub) {
      this.loadingSub.unsubscribe();
    }
  }
}
