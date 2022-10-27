import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-using-service',
  templateUrl: './using-service.component.html',
  styleUrls: ['./using-service.component.css'],
  providers :[HelloService , EmployeeService]
})
export class UsingServiceComponent implements OnInit {
// This is dep injection

employees : any[] =[];
  constructor(private helloService : HelloService, private employeeService : EmployeeService) {
  
   }
   ngOnInit(): void {
  }
   
  
  CallHelloService() : void
  {
    console.log(this.helloService.hello("Ajay"));
    // return this.helloService.hello("Ajay");


  }

  GetAllEmployees ()
  {

    this.employees =  this.employeeService.GetAllEmployees();
   console.log(this.employees);
  }
}
