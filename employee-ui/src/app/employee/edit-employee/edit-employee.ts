import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup
} from '@angular/forms';

import {
  ActivatedRoute,
  Router
} from '@angular/router';

import {
  EmployeeService
} from '../../services/services/employee.service';

@Component({

  selector: 'app-edit-employee',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl:
    './edit-employee.html',

  styleUrls: [
    './edit-employee.css'
  ]
})

export class EditEmployeeComponent {

  employeeForm!: FormGroup;

  employeeId!: number;

  constructor(

    private fb: FormBuilder,

    private employeeService:
    EmployeeService,

    private route:
    ActivatedRoute,

    private router:
    Router

  ) {}

  ngOnInit(): void {

    this.employeeId =
      Number(
        this.route.snapshot.paramMap
          .get('id')
      );

    this.employeeForm =
      this.fb.group({

        employeeCode: [''],

        name: [''],

        email: [''],

        department: [''],

        salary: [''],

        joiningDate: [''],

        status: ['']
      });

    this.loadEmployee();
  }

  loadEmployee(): void {

    this.employeeService
      .getEmployeeById(
        this.employeeId
      )

      .subscribe({

        next: (data: any) => {

          this.employeeForm
            .patchValue(data);
        },

        error: (err) => {

          console.log(err);
        }
      });
  }

  onUpdate(): void {

    this.employeeService
      .updateEmployee(

        this.employeeId,

        this.employeeForm.value
      )

      .subscribe({

        next: () => {

          alert(
            'Employee Updated'
          );

          this.router.navigate([
            '/employees'
          ]);
        },

        error: (err) => {

          console.log(err);
        }
      });
  }
}