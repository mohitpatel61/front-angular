import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  user: any = null;  // Store user data
  userName: string = '';
  userProfilePic: string = 'https://via.placeholder.com/150';
  constructor(private authService: AuthService) {}
  
  isAuthenticated(): boolean {
    console.log(this.authService.isLoggedIn());
    return this.authService.isLoggedIn();  // Check if user is logged in
  }

  ngOnInit(): void {
    // Get user data when the component is initialized

    this.user = this.authService.getUser();
    if (this.user) {
      this.userName = (this.user.firstName && this.user.lastName) ? `${this.user.firstName} ${this.user.lastName}` : 'User';  // Use template literals to concatenate firstName and lastName or fallback to 'User'
      this.userProfilePic = this.user?.profilePic || 'https://via.placeholder.com/150';  // Assign user's profile picture if available
    }
  }

}
