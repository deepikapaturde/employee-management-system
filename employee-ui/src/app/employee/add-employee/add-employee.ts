import {
  Component,
  inject
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { CommonModule }
from '@angular/common';

import { Router }
from '@angular/router';
import { EmployeeService } from '../../services/services/employee.service';

@Component({
  selector: 'app-add-employee',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl:
    './add-employee.html',

  styleUrls:
    ['./add-employee.css']
})

export class AddEmployeeComponent {

  employeeForm!: FormGroup;

  private fb = inject(FormBuilder);

  private employeeService =
    inject(EmployeeService);

  private router = inject(Router);

  ngOnInit(): void {

    this.employeeForm = this.fb.group({

      employeeCode: [
        '',
        Validators.required
      ],

      name: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      department: [
        '',
        Validators.required
      ],

      salary: [
        '',
        Validators.required
      ],

      joiningDate: [
        '',
        Validators.required
      ],

      status: [true]
    });
  }

  // SAVE EMPLOYEE

  onSubmit(): void {

    if (this.employeeForm.invalid) {

      this.employeeForm.markAllAsTouched();

      return;
    }

    this.employeeService
      .addEmployee(this.employeeForm.value)
      .subscribe({

        next: () => {

          alert(
            'Employee added successfully'
          );

          this.router.navigate(
            ['/employees']
          );
        },

        error: (error) => {

          console.error(error);
        }
      });
  }
}