import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modules-page',
  templateUrl: './modules-page.component.html',
  styleUrls: ['./modules-page.component.scss']
})
export class ModulesPageComponent {
  constructor(private router: Router) {}

  navigateToAddModule() {
    this.router.navigate(['modules/module']);
  }

}
