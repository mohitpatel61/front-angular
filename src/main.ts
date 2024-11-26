import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { withDebugTracing } from '@angular/router';

import { AppComponent } from './app/app.component';  
import { UserComponent } from './app/user/user-list/user.component';  
import { UserCreateComponent } from './app/user/user-create/user-create.component';
import { UserDetailComponent } from './app/user/user-detail/user-detail.component';  
import { ContactUsComponent } from './app/contact-us/contact-us.component';
import { AboutUsComponent } from './app/about-us/about-us.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';

import { UserEditComponent } from './app/user/user-edit/user-edit.component';
import { ProductComponent } from './app/product/product.component';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserLoginComponent } from './app/user-login/user-login.component';
import { AuthGuard } from './app/services/auth.guard';  // Import the AuthGuard
import { AuthService } from './app/services/auth.service';
import { UserProfileComponent } from './app/user-profile/user-profile.component';

const routes: Route[] = [
  { path: 'list', component: UserComponent, canActivate: [AuthGuard] },  // Guard for user list
  { path: 'add-user', component: UserCreateComponent, canActivate: [AuthGuard] },  // Guard for user creation
  { path: 'detail/:id', component: UserDetailComponent, canActivate: [AuthGuard] },  // Guard for user detail
  { path: 'edit/:id', component: UserEditComponent, canActivate: [AuthGuard] },  // Guard for user edit
  { path: 'about-us', component: AboutUsComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },  // Guard for dashboard
  { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },  // Guard for dashboard
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'user-profile', component: UserProfileComponent},

  { path: '', redirectTo: 'list', pathMatch: 'full' },  // Default redirect to user list
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withDebugTracing()), provideHttpClient(), provideAnimationsAsync(), AuthService]
}).catch((err) => console.error(err));
