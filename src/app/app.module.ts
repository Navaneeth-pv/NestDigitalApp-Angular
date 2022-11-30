import { Component, NgModule } from '@angular/core';
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
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule} from '@angular/common/http'

const myRoute:Routes=[
  {
    path:"addcourse",
    component:AddCoursesComponent
  },
  {
    path:"addfriends",
    component:AddFriendsComponent
  },
  {
    path:"adminlogin",
    component:AdminLoginComponent
  },
  {
    path:"emoloyeelogin",
    component:EmployeeLoginComponent
  },
  {
    path:"employeeregistration",
    component:EmployeeRegistrationComponent
  },
  {
    path:"viewallcourses",
    component:ViewAllCoursesComponent
  },
  {
    path:"viewallfriends",
    component:ViewAllFriendsComponent
  },
  {
    path:"home",
    component:HomeComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    EmployeeRegistrationComponent,
    ViewAllCoursesComponent,
    ViewAllFriendsComponent,
    AddCoursesComponent,
    AddFriendsComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
