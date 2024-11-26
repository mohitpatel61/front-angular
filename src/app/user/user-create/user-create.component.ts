import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../user.service';
import { MatInputModule } from '@angular/material/input'; 
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-user-create',
  standalone: true,
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatButtonModule, MatFormFieldModule],
})
export class UserCreateComponent {
  userForm: FormGroup;
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      
      age: ['', [Validators.required, Validators.min(1)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^([7-9]{1})\d{9}$/), // Validates Indian phone numbers
        ],
      ],
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    console.log("this.userForm.valid",this.userForm.valid);
    if (this.userForm.valid) {
      this.userService.createUser(this.userForm.value).subscribe(
        () => {
          this.router.navigate(['/list']);
        },
        (error) => {
          console.error('Error creating user:', error);
        }
      );
    }
  }
  checkAlreadyExist() {
    const email = this.userForm.get('email')?.value;
    // console.log('email:', email);
    this.userService.checkEmailAlreadyExists(email).subscribe(
      (exists: boolean) => { // Directly using the boolean result
        if (exists) {
          this.userForm.get('email')?.setErrors({ emailExists: true });
        } else {
          // this.router.navigate(['/list']);
        }
      },
      (error) => {
        console.error('Error during email existence check:', error);
      }
    );
  }
  
  // checkAlreadyExist123() {
  //   const email = this.userForm.get('email')?.value;
  
  //   this.userService.checkEmailAlreadyExists(email).subscribe(
  //     (response) => {
  //       if (response?.exists) {
  //         // If email exists, set an error
  //         this.userForm.get('email')?.setErrors({ emailExists: true });
  //       } else {
  //         // Navigate if email does not exist
  //         this.router.navigate(['/list']);
  //       }
  //     },
  //     (error) => {
  //       console.error('Error checking email:', error);
  //     }
  //   );
  // }
  

  isInvalid(controlName: string): boolean {
    const control = this.userForm.get(controlName);
    return control ? control.invalid && (control.touched || this.formSubmitted) : false;
  }
}
