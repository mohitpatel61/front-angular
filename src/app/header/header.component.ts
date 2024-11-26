import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; // RouterModule needed for routerLink in the template
import { AuthService } from '../services/auth.service'; // Import AuthService to manage login state
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule], // Import RouterModule for routing in the template
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Fix typo: should be styleUrls
})
export class HeaderComponent {
  constructor(private router: Router, private authService: AuthService) {}

  isAuthenticated(): boolean {
    return this.authService.isLoggedIn();  // Check if user is logged in
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to login page after logout
  }
}
