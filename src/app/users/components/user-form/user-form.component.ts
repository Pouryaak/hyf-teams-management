import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Role } from 'src/app/core/models/user.model';

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
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  roles = [Role.LT, Role.TA, Role.HWR];
  userId: string | null = null;
  private routeSub!: Subscription;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      if (this.userId) {
        this.fetchUserData(this.userId);
      }
    });
  }

  fetchUserData(userId: string) {
    console.log("fetching....")
    // this.userService.getUserById(userId).subscribe(user => {
    //   this.userForm.patchValue(user);
    // });
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.userId) {
        // Update existing user
        console.log(this.userForm.value);
      } else {
        // Add new user
        console.log(this.userForm.value);
      }
    }
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe(); // Prevent memory leaks
  }
}
