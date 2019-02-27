import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data/data.service';
import { PdfResolveService } from '../services/pdf-resolve/pdf-resolve.service';
import { UtilitiesService } from '../services/utilities/utilities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user: Array<any> = [];
  public age: Object;
  public isLoading = false;
  public code;

  constructor(private route: ActivatedRoute,
    private data: DataService,
    private pdf: PdfResolveService,
    private utils: UtilitiesService) {
      console.log('HOME');
    this.getData();
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.route.params.subscribe(param => {
      console.log(param);
      if (param['id']) {
        this.data.getData(param['id']).subscribe(data => {
          if (data) {
            this.user = this.utils.getAllDetails(data);
            console.log(this.user);
          }
        });

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
