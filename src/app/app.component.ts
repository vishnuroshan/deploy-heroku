import { Component } from '@angular/core';
import { param } from '../app/app.type';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deploy-heroku';
  qParam: param;
  queryAvailable = false;

  constructor(private data: DataService) {
    // tslint:disable-next-line:no-shadowed-variable
    data.getData().subscribe(data => {
      console.log(data);
    });
  }
}

