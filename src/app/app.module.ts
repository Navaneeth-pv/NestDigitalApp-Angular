import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    EmployeeRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
