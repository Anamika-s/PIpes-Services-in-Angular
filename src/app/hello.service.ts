import {Injectable} from '@angular/core';


@Injectable(
  {
    providedIn :'root'
  }
)
export class HelloService
{
  hello(name : string ) : string
  {
    return "Hello " +  name;
  }

}