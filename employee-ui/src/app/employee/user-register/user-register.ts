import { Component, inject } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';

import { userService }
from '../../services/services/Userservice';

@Component({
  selector: 'app-register',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl:
    './user-register.html',

  styleUrls: [
    './user-register.css'
  ]
})

export class UserRegister {

  registerForm!: FormGroup;

  errorMessage = '';

  private fb = inject(FormBuilder);

  private userServices =
    inject(userService);

  private router =
    inject(Router);

  ngOnInit(): void {

    this.registerForm =
      this.fb.group({

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

        password: [
          '',
          Validators.required
        ],

        role: [
          '',
          Validators.required
        ]
      });
  }

  onSubmit(): void {

    if (
      this.registerForm.invalid
    ) {

      this.registerForm
        .markAllAsTouched();

      return;
    }

    this.userServices
      .addUser(
        this.registerForm.value
      )

      .subscribe({

        next: () => {

          alert(
            'User Registered Successfully'
          );

          this.router.navigate(
            ['/login']
          );
        },

        error: (error) => {

          console.error(error);

          this.errorMessage =
            'Registration Failed';
        }
      });
  }
}