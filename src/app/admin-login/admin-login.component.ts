import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  username=""
  password=""

  constructor(private router:Router){}



  readlogin=()=>
  {
    let data:any={
      "username":this.username,
      "password":this.password
  }
    console.log(data)

    if (this.username=="admin" && this.password=="nestdigital") {

      this.router.navigate(['/viewallcourses'])
      alert("valid login")
      
    } else {
      alert("invalid login")
      
    }
  }
}
