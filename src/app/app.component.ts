import { Component } from '@angular/core';
import { UserDetails } from '../app/app.type';
import { DataService } from './data.service';
import * as _ from 'lodash';
import { UtilitiesService } from './utilities.service';



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

  constructor(private data: DataService, private utils: UtilitiesService) {
    this.getData();
  }

  getData() {
    this.data.getData().subscribe(data => {
      if (data) {
        this.userDetails = this.utils.getUserDetails(data);
        this.records = this.utils.groupByConcept(data);
        console.log(this.records);
      }
    });
  }
}

