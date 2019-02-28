import { Pipe, PipeTransform } from '@angular/core';
import { AgeDetails } from 'src/app/app.type';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(age: AgeDetails): any {
    console.log(age);
    if (age['years']) {
      return age['years'];
    } else if (age['months']) {
      return age['months'];
    } else {
      return age['days'];
    }
  }
}
