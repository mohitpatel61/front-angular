import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { User } from '../../user.model';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input'; 
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  templateUrl: './user-edit.component.html',
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSelectModule, MatButtonModule, MatFormFieldModule],
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userForm: FormGroup;
  userId!: number;
  isSaving = false; // To track the saving state

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^([7-9]{1})\d{9}$/)]],
    });
  }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));

    this.userService.getUserById(this.userId).subscribe(user => {
      if (user) {
        this.userForm.patchValue({
          firstName: user.firstName,
          lastName: user.lastName,
          gender: user.gender,
          age: user.age,
          email: user.email,
          phone: user.phone
        });
      } else {
        console.error('User not found');
        this.router.navigate(['/list']);
      }
    });

    // Subscribe to valueChanges to trigger auto-save
    this.userForm.valueChanges.subscribe(changes => {
      console.log('Form changes detected:', changes);
      this.autoSave();
    });
  }

  // Auto-save function: Trigger save if the form is valid
  autoSave(): void {
    // Mark all form fields as touched to show error messages for invalid fields
    this.userForm.markAllAsTouched();

    // Only proceed with auto-save if the form is valid and not already saving
    if (this.userForm.valid && !this.isSaving) {
      console.log('Auto-saving user data...');
      this.save();
    }
  }

  // Save function: Trigger actual save process
  save(): void {
    this.isSaving = true; // Show spinner
    this.userService.updateUser(this.userId, this.userForm.value).subscribe({
      next: () => {
        console.log('User data saved successfully');
        this.isSaving = false; // Hide spinner
      },
      error: (err) => {
        console.error('Error saving data:', err);
        this.isSaving = false; // Hide spinner even on error
      }
    });
  }
}

