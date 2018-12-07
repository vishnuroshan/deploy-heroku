import { Component } from '@angular/core';
import { UserDetails } from '../app/app.type';
import { DataService } from './data.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public records: any;
  public userDetails: UserDetails;
  public age: Object;
  pdfSrc = 'EN_MEDIME/uploads/PR_000473/shared/0004731544102015170_EN.pdf';

  constructor(private data: DataService) {
    this.getData();
  }

  getData() {
    this.data.getData().subscribe(data => {
      if (data) {
        this.getUserDetails(data);
        this.records = this.groupByConcept(data);
        console.log(this.records);
      }
    });
  }



  getUserDetails(data) {
    this.userDetails = {
      email_id: data[0]['email_id'],
      person_name: data[0]['person_name'],
      age: data[0]['age'],
      mobile_no: data[0]['mobile_no'],
      gender: data[0]['gender']
    };
    console.log(this.userDetails);
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

