import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../services/auth.service';  // Import AuthService

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  userLoginForm: FormGroup;
  formSubmitted = false;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {
    this.userLoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    console.log("this.userLoginForm.valid",this.userLoginForm.valid);
    if (this.userLoginForm.valid) {
      this.userService.loginUser(this.userLoginForm.value).subscribe(
        (response) => {
          console.log("response",response);
          this.authService.login(response);
          this.router.navigate(['/dashboard'])
          // this.router.navigate(['/about-us']);
        },
        (error) => {
          console.error('Error creating user:', error);
        }
      );
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.userLoginForm.get(controlName);
    return control ? control.invalid && (control.touched || this.formSubmitted) : false;
  }
}
