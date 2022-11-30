import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { ViewAllCoursesComponent } from './view-all-courses/view-all-courses.component';
import { ViewAllFriendsComponent } from './view-all-friends/view-all-friends.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    EmployeeRegistrationComponent,
    ViewAllCoursesComponent,
    ViewAllFriendsComponent,
    AddCoursesComponent,
    AddFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
