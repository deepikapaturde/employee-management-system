import { Component, inject } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/services/auth';

@Component({
  selector: 'app-login',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
 templateUrl:
    './login.html',

  styleUrls:
    ['./login.css']
  })

export class LoginComponent {

  loginForm!: FormGroup;

  errorMessage = '';

  private fb = inject(FormBuilder);

  private authService = inject(AuthService);

  private router = inject(Router);

  ngOnInit(): void {

    this.loginForm = this.fb.group({

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    });
  }

  onLogin(): void {

    if (this.loginForm.invalid) {

      this.loginForm.markAllAsTouched();

      return;
    }

    this.authService
      .login(this.loginForm.value)
      .subscribe({

        next: (response) => {

          // STORE JWT TOKEN
          localStorage.setItem(
            'token',
            response.token
          );
          // REDIRECT
          
          this.router.navigate(['/dashboard']);
        },

        error: (error) => {

          this.errorMessage =
            'Invalid email or password';

          console.error(error);
        }
      });
  }
}