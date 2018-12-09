import { Component } from '@angular/core';
import { UserDetails } from '../app/app.type';
import { DataService } from './data.service';
import * as _ from 'lodash';
import { UtilitiesService } from './utilities.service';
import { PdfResolveService } from './pdf-resolve.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public records: any;
  public userDetails: UserDetails;
  public age: Object;
  public isLoading = false;
  pdfSrc = 'EN_MEDIME/uploads/PR_000473/shared/0004731544102015170_EN.pdf';

  constructor(private data: DataService, private pdf: PdfResolveService, private utils: UtilitiesService) {
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

  ifAttachment(d, t): boolean {
    return (d['type'] === 'upload' && t['file_path']);
  }

  pdfUrl(url) {
    this.isLoading = true;
    this.pdf.resolveURL(url).subscribe(finalURL => {
      console.log(finalURL);
      this.pdf.getPdf(finalURL).subscribe(data => {
        this.isLoading = false;
        console.log(data);
        window.open(data);
      });
    });
  }
}

