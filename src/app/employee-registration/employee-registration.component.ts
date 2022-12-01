import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent {
  employeeid=""
  firstname=""
  lastname=""
  houseno=""
  housename=""
  password=""
  confirmpassword=""

  constructor(private router:Router){}



  readempreg=()=>
  {
    let data:any={
      "password":this.password,
      "confirmpassword":this.password
  }
    console.log(data)

    if (this.password==this.confirmpassword) {

      this.router.navigate(['/employeelogin'])
      alert("Successfully Registered!!!")
      
    } else {
      alert("invalid password")
      
    }
  }

}
