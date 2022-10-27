import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    employees : any[] = [

    {code:'emp01', name:'kartik kumar', gender:'Male', annualSalary:55000, dateOfBirth:'10/6/1990'},

    {code:'emp02', name:'gagan singh', gender:'Male', annualSalary:67000, dateOfBirth:'5/6/1990'},
    
    {code:'emp03', name:'kavita bali', gender:'Female', annualSalary:55000, dateOfBirth:'12/6/1990'},
    
    {code:'emp04', name:'Seeta', gender:'Female', annualSalary:90000, dateOfBirth:'10/6/1990'},
    
    {code:'emp05', name:'kartik', gender:'Male', annualSalary:55000, dateOfBirth:'3/12/1990'},
    
    {code:'emp06', name:'kartik', gender:'Male', annualSalary:55000, dateOfBirth:'5/16/1990'},
 

   ];
   GetAllEmployees() {
    return this.employees;
   }
    
   
  constructor() { }
}
