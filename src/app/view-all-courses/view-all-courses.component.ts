import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-courses',
  templateUrl: './view-all-courses.component.html',
  styleUrls: ['./view-all-courses.component.css']
})
export class ViewAllCoursesComponent {

  constructor(private api:ApiService) {

    api.fetchCourses().subscribe(

      (response)=>{
        this.data=response;
      }
    )


  }

  data:any=[]
}
