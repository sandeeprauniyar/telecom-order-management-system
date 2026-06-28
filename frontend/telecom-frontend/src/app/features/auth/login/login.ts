import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  hidePassword = true;
  loading = false;
  errorMessage = '';
  

  constructor(private fb: FormBuilder, private router: Router ,  private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login(): void {
  if(this.loginForm.invalid){
    this.loginForm.markAllAsTouched();
    return;
  }

  this.loading = true;
  this.errorMessage = '';

  setTimeout(() => {
    const { username, password } = this.loginForm.value;

    const isAuthenticated = this.authService.login(username, password);

    this.loading = false;

    if(isAuthenticated){
      this.authService.saveToken('dummy-jwt-token');
      this.router.navigate(['/dashboard']);
    }else{
      this.errorMessage = 'Invalid Username or Password';
    }
  }, 1000);
}
}