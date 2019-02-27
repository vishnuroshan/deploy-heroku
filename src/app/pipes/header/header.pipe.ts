import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'header'
})
export class HeaderPipe implements PipeTransform {

  transform(value: any): any {
    console.log(value);
    return [1, 2, 3, 4];
  }

}
