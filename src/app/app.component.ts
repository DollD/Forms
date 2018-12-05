import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Google-Form';
 
  EmployeeForm;
  constructor(){

    this.EmployeeForm  = new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl(),
      surName : new FormControl(),
      gender : new FormControl(),
      picker : new FormControl(),
      Education: new FormArray([
        new FormGroup({
          SSC : new FormControl(),
          Graduation : new FormControl(),
          PostGraduation : new FormControl()
        })
      ])
     
    });
  }

  


  }

