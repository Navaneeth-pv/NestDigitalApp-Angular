import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  empid=""
  password=""

  constructor(private router:Router){}



  reademplogin=()=>
  {
    let data:any={
      "empid":this.empid,
      "password":this.password
  }
    console.log(data)

    if (this.empid=="1122" && this.password=="12345") {

      this.router.navigate(['/addcourse'])
      alert("valid login")
      
    } else {
      alert("invalid login")
      
    }
  }

}
