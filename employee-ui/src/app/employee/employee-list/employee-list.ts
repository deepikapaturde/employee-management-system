import {
  Component,
  inject
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { RouterModule }
from '@angular/router';
import { EmployeeService } from '../../services/services/employee.service';


@Component({
  selector: 'app-employee-list',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl:
    './employee-list.html',

  styleUrls: [
    './employee-list.css'
  ]
})

export class EmployeeListComponent {

 employees: any[] = [];
 loading = true;
  constructor(
    private employeeService:
    EmployeeService
  ) {}

 ngOnInit(): void {

    this.employeeService.getEmployees().subscribe({

      next: (data) => {

        this.employees = data;

        this.loading = false;
        console.log(data);

      },
  error: (err) => {
        console.log(err);

        this.loading = false;
      }

    });

  }
}