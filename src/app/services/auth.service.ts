import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly SESSION_KEY = 'user_session';  // Session storage key
  private readonly EXPIRATION_KEY = 'session_expiry';  // Session expiration key
  private readonly EXPIRATION_TIME = 3600 * 1000; // Set expiration time (1 hour in milliseconds)

  constructor() {}

  // Method to log in and store session data
  login(user: any): void {
    const currentTime = new Date().getTime(); // Get current time in milliseconds
    sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(user));
    sessionStorage.setItem(this.EXPIRATION_KEY, currentTime.toString()); // Store session start time
  }

  // Method to check if the user is logged in
  isLoggedIn(): boolean {
    const sessionStart = sessionStorage.getItem(this.EXPIRATION_KEY);
    const currentTime = new Date().getTime();
    
    // Check if session exists and if it has expired
    if (sessionStart && (currentTime - parseInt(sessionStart) < this.EXPIRATION_TIME)) {
      return !!sessionStorage.getItem(this.SESSION_KEY);
    } else {
      this.logout(); // If session has expired, log the user out
      return false;
    }
  }

  // Method to get the current user's session data
  getUser(): any {
    const user = sessionStorage.getItem(this.SESSION_KEY);
    return user ? JSON.parse(user) : null;
  }
  

  // Method to log out and clear the session data
  logout(): void {
    sessionStorage.removeItem(this.SESSION_KEY);
    sessionStorage.removeItem(this.EXPIRATION_KEY); // Remove expiration time as well
  }
}
