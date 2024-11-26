import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input'; 
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../services/auth.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSelectModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{
  userForm: FormGroup;
  userName: string = '';
  userId!: number;
  isSaving = false; // To track the saving state
  profilePicUrl: string | ArrayBuffer | null = null; // For displaying the profile picture


  /**
   * Triggered when a new profile picture is selected.
   */
  onProfilePicSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0]; // Select the first file
      // console.log("this.userId",this.userId);
      this.uploadProfilePic(file)
    }
  }

  /**
   * Example: Method to upload the selected profile picture to the server.
   */
  uploadProfilePic(file: File): void {
    // Implement the service to upload the image
    // console.log('Uploading profile picture:', file);
    console.log("this.userId",this.userId);
    
    this.userService.uploadProfilePicture(this.userId, file).subscribe({
      next: (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          const progress = Math.round((100 * event.loaded) / (event.total ?? 1));
          console.log(`Upload progress: ${progress}%`);
        } else if (event.type === HttpEventType.Response) {
          if(event.body.code == 200){
            console.log('Profile picture uploaded successfully:', event.body.updatedUser);
            this.profilePicUrl = event.body.updatedUser.profilePicture;
            // this.loadUserProfile();
          }
          
        }
      },
      error: (err) => {
        console.error('Error uploading profile picture:', err);
      },
    });
    // Example: Call a service to handle file upload
    // this.userService.uploadProfilePicture(this.userId,file).subscribe(response => {
    //   console.log('Profile picture updated successfully');
    // });
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  
  ) {
    // Initialize form with necessary fields
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^([7-9]{1})\d{9}$/)]],
      address: [''],
      nationality: [''],
      role: [''],
      aboutYourself: [''],
      speciality: [''],
      education: [''],
      dob: ['']
    });
  }



  ngOnInit(): void {
    // Fetch user details using AuthService
    const loggedInUser = this.authService.getUser();
    if (loggedInUser) {
      this.userId = loggedInUser.id; // Assuming `id` exists in user session
      this.loadUserProfile();
    } else {
      console.error('User not logged in');
      // this.router.navigate(['/login']); // Redirect to login if not logged in
    }

      // Subscribe to valueChanges to trigger auto-save
      this.userForm.valueChanges.subscribe(changes => {
        console.log('Form changes detected:', changes);
        this.autoSave();
      });
  }

  // Load user profile using userId
  loadUserProfile(): void {
    this.userService.getUserById(this.userId).subscribe({
      next: (user) => {
        if (user) {
          this.userName = `${user.firstName} ${user.lastName}`; 
          console.log("UDETAIL",user);
          // Format the date and update the form
          const formattedDob = this.formatDateForInput(user.dob);
          this.userForm.patchValue({
            ...user,
            dob: formattedDob
          });
          this.profilePicUrl = user.profilePicture
        } else {
          console.error('User not found');
        
        }
      },
      error: (err) => {
        console.error('Error fetching user:', err);
      }
    });
  }
  
  formatDateForInput(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
  
  autoSave(): void {
    if (this.userForm.valid && !this.isSaving) {
      this.save();
    }
  }
  
     // Save profile data
  save(): void {
    this.isSaving = true; // Show spinner
    this.userService.updateUser(this.userId, this.userForm.value).subscribe({
      next: () => {
        this.isSaving = false; // Hide spinner
      },
      error: (err) => {
        console.error('Error saving profile:', err);
        this.isSaving = false; // Hide spinner even on error
      }
    });
  }
}
