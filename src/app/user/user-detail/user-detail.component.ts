// src/app/user-detail/user-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { User } from '../../user.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  imports: [CommonModule, RouterModule],
})
export class UserDetailComponent implements OnInit {
  recordId: number | null = null;
  user$: Observable<User | null> = of(null);

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.recordId = +this.route.snapshot.paramMap.get('id')!;

    if (this.recordId) {
      this.user$ = this.userService.getUserById(this.recordId).pipe(
        map(user => {
          if (user) {
            return user;
          } else {
            this.router.navigate(['/list']); // Navigate back if not found
            return null;
          }
        }),
        catchError((error) => {
          console.error('Error fetching user:', error);
          this.router.navigate(['/list']); // Navigate back on error
          return of(null);
        })
      );
    }
  }

  goBackToList() {
    this.router.navigate(['/list']);
  }
}
