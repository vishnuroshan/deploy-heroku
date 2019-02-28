import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data/data.service';
import { PdfResolveService } from '../services/pdf-resolve/pdf-resolve.service';
import { UtilitiesService } from '../services/utilities/utilities.service';
import { KEY_STRING, ELEMENT_DATA } from '../app.strings';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user: Object;
  public age: Object;
  public isLoading = false;
  public records: any;
  public tableContent: Array<Object>;

  constructor(private route: ActivatedRoute,
    private data: DataService,
    private pdf: PdfResolveService,
    private utils: UtilitiesService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe(param => {
      this.getData(param[KEY_STRING]);
    });

  }

  getData(param) {
    this.data.getData(param).subscribe(data => {
      this.tableContent = this.utils.getTableContent(data);
      this.user = this.utils.getUserDetails(data);
      this.isLoading = false;
    });
  }

  ifAttachment(d, t): boolean {
    return (d['type'] === 'upload' && t['filePath']);
  }

  pdfUrl(url) {
    this.isLoading = true;
    this.pdf.resolveURL(url).subscribe(finalURL => {
      console.log(finalURL);
      this.isLoading = false;
      window.open(finalURL);
    });
  }

}
