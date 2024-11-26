// src/app/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model'; // Adjust the path as necessary
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number = 1, pageSize: number = 10): Observable<User[]> {
    const url = `${this.apiUrl}?page=${page}&pageSize=${pageSize}`;
    return this.http.get<User[]>(url).pipe(
      tap(users => console.log('Fetched users:', users)),
      catchError(error => {
        console.error('Error fetching users', error);
        return of([]);
      })
    );
  }


  getUserById(id: number): Observable<User | null> {
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => of(null))
    );
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user).pipe(
      // tap((newUser: User) => console.log(`Created user: ${newUser.firstName}`)),
      catchError(error => {
        console.error('Error creating user', error);
        return of(user);
      })
    );
  }

  loginUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`,user).pipe(
      tap((loginUser: User) => console.log(`login user`, loginUser)),
      catchError(error => {
        console.error('Error creating user', error);
        return of(user);
      })
    );
    
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => console.log(`Deleted user with id ${id}`)),
      catchError(error => {
        console.error('Error deleting user', error);
        return of();
      })
    );
  }

  updateUser(id: number, userData: User): Observable<User> {
    console.log("userData",userData);
    return this.http.put<User>(`${this.apiUrl}/${id}`, userData).pipe(
      tap(updatedUser => console.log(`Updated user: ${updatedUser.firstName}`)),
      catchError(error => {
        console.error('Error updating user', error);
        return of(userData);
      })
    );
  }

  // checkEmailAlreadyExists(email: string): Observable<boolean> {
  //   return this.http.get<{ exists: boolean }>(`${this.apiUrl}/check-email?email=${email}`).pipe(
  //     map(response => response.exists),
  //     catchError(error => {
  //       console.error('Error checking email:', error);
  //       return of(false);  // Default to "not existing" if there’s an error
  //     })
  //   );
  // }

  checkEmailAlreadyExists(email: string): Observable<boolean> {
    // console.log("check Email");
    return this.http.get<{ exists: boolean }>(`${this.apiUrl}/check-email/${email}`).pipe(
      map(response => response.exists),
      catchError(error => {
        console.error('Error checking email:', error);
        return of(false);  // Default to "not existing" if there's an error
      })
    );
  }

  uploadProfilePicture(id: number, fileData: File): Observable<any>{
    const formData = new FormData();
    formData.append('profilePicture', fileData); // 'profilePicture' matches the backend's expected key
    return this.http.put(`${this.apiUrl}/uploadProfilePicture/${id}`, formData, {
      reportProgress: true,
      observe: 'events'
    });
    
  }
  
}
