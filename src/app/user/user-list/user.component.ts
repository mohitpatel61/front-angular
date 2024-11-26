import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../user.service'; 
import { Router } from '@angular/router';
import { User } from '../../user.model'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxDatatableModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  usersData: User[] = []; // Array to hold user data
  isLoading: boolean = true; // Loading state for table
  subscription: Subscription = new Subscription(); // Manage subscriptions

  currentPage: number = 1;
  pageSize: number = 10; // Default page size
  totalRecords: number = 0; // Total number of records (optional, for pagination controls)

  // Configuration for ngx-datatable
  columns = [
    { prop: 'firstName', name: 'First Name' },
    { prop: 'lastName', name: 'Last Name' },
    { prop: 'age', name: 'Age' },
    { prop: 'email', name: 'Email' },
    { prop: 'phone', name: 'Phone' },
    { prop: 'action', name: 'Actions', sortable: false } // For the Actions column
  ];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.fetchUsers(); // Fetch the first page of users
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Clean up subscriptions
  }

  // Fetch users based on pagination
  fetchUsers(): void {
    this.isLoading = true;
    this.subscription.add(
      this.userService.getUsers(this.currentPage, this.pageSize).subscribe(
        (data: any) => {
          console.log('Fetched users data:', data); // Debugging
          this.usersData = data.users; // Assuming the response contains a 'users' key
          this.totalRecords = data.totalRecords; // Assuming response contains totalRecords for pagination
          this.isLoading = false;
        },
        error => {
          console.error('Error fetching user data:', error); // Handle error
          this.isLoading = false;
        }
      )
    );
  }

  // Navigate to user details page
  userDetail(id: number): void {
    this.router.navigate(['/detail', id]);
  }

  // Navigate to edit user page
  editUser(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  // Delete user
  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.subscription.add(
        this.userService.deleteUser(id).subscribe(() => {
          this.usersData = this.usersData.filter(user => user.id !== id); // Update table data
          alert('User deleted successfully');
        })
      );
    }
  }

  // Handle page change
  onPageChange(page: number): void {
    this.currentPage = page;
    this.fetchUsers(); // Fetch data for the new page
  }
}
