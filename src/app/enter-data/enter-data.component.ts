import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-enter-data',
  templateUrl: './enter-data.component.html',
  styleUrls: ['./enter-data.component.css']
})
export class EnterDataComponent {
  employee: Employee = new Employee();
  isValid: boolean = false;
  constructor(
    private router: Router
  ) { }


  submit() {
    this.router.navigate(['/showData'],
      {
        queryParams: {
          name: this.employee.name,
          dateOfBirth: this.employee.dateOfBirth,
          gender: this.employee.gender,
          reason: this.employee.reason,
          lastSalary: this.employee.lastSalary,
          expectedSalary: this.employee.expectedSalary,
          technicalExpertise: this.employee.technicalExpertise
        }
      });
  }

  validate() {
    this.isValid = !(/\d/.test(this.employee.name)) && this.employee.name !== "";
  }

}
