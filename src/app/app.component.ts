import { Component } from '@angular/core';
import { UserDetails } from '../app/app.type';
import { DataService } from './data.service';
import * as _ from 'lodash';
import { UtilitiesService } from './utilities.service';
import { PdfResolveService } from './pdf-resolve.service';
import { ActivatedRoute } from '@angular/router';



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
  public code;
  constructor(private route: ActivatedRoute, private data: DataService, private pdf: PdfResolveService, private utils: UtilitiesService) {
    this.getData();

    this.route.params.subscribe((code) => {
      this.code = code;
      console.log(code);
    });
  }

  getData() {
    this.route.params.subscribe((code) => {
      console.log(code['id']);
      this.data.getData(code['id']).subscribe(data => {
        if (data) {
          this.userDetails = this.utils.getUserDetails(data);
          this.records = this.utils.groupByConcept(data);
          console.log(this.records);
        }
      });
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

