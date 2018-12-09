import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'typeformat'
})
export class TypeformatPipe implements PipeTransform {

  transform(value: any): any {
    if (moment(value).isValid()) {
      return moment(value).format('DD MMM YYYY, HH:mm a');
    } else {
      return value;
    }
  }
}


