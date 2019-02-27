import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './services/data/data.service';
import { PdfResolveService } from './services/pdf-resolve/pdf-resolve.service';
import { UtilitiesService } from './services/utilities/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deploy';
}
