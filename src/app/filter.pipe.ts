import { Pipe, PipeTransform } from '@angular/core';
//import { Ta } from "./task/task.component";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: string): any {
    return value.filter((res)=>res.name.startsWith(args));
  }

}
