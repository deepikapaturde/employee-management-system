import {
  Component,
  inject
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { Router }
from '@angular/router';

import { RouterModule }
from '@angular/router';

@Component({
  selector: 'app-dashboard',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

 templateUrl:
    './dashboard.html',

  styleUrl:
'./dashboard.css'
})

export class DashboardComponent {

  private router = inject(Router);

 
  // LOGOUT

  logout(): void {

    localStorage.clear();

    this.router.navigate(['/']);
  }
}