import {Pipe, PipeTransform} from '@angular/core';

@Pipe(
  {
     name:'gender'
  }
)

export  class GenderPipe implements PipeTransform
{
  transform(value: any, gender: string) : string
  {
   if(gender.toLowerCase()=="male")
   return "Mr. " + value;
   else 
   return "Ms. " + value;
  } 
}