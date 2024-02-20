import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {
  constructor(private router: Router) {}

  navigateToAddUser() {
    console.log("clicked")
    this.router.navigate(['users/user']);
  }

}
