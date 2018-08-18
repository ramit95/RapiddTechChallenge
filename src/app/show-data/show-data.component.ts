import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { Router, ActivatedRoute } from '@angular/router';
import { namespaceSVG } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent {

  employee: Employee = new Employee();
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.employee.name = params['name'];
      this.employee.dateOfBirth = params['dateOfBirth'];
      this.employee.gender = params['gender'];
      this.employee.reason = params['reason'];
      this.employee.lastSalary = params['lastSalary'];
      this.employee.expectedSalary = params['expectedSalary'];
      this.employee.technicalExpertise = params['technicalExpertise'];
      console.log(this.employee);
    });
  }

}
