import { Injectable } from '@angular/core';
import { UserDetails } from './app.type';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor( ) { }


  getUserDetails(data): UserDetails {
    return {
      email_id: data[0]['email_id'],
      person_name: data[0]['person_name'],
      age: data[0]['age'],
      mobile_no: data[0]['mobile_no'],
      gender: data[0]['gender']
    };
  }

  groupByConcept(data): Array<Object> {
    const result = this.getKeyValuePairs(_.groupBy(data, 'concept_code'));
    return result;
  }

  getKeyValuePairs(JSON): Array<Object> {
    const result: Array<Object> = new Array<Object>();
    // tslint:disable-next-line:forin
    for (const key in JSON) {
      // console.log(JSON[key][0]['request_clin_note_content']['topics'][0]['sections']);
      result.push({ key: key, value: JSON[key], sections: JSON[key][0]['request_clin_note_content']['topics'][0]['sections'] });
    }
    return result;
  }
}
