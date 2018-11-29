import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { param } from '../app/app.type';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deploy-heroku';
  qParam: param;
  queryAvailable = false;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      try {
        this.qParam = params['patient_id'];
        if (this.qParam !== undefined) {
          this.queryAvailable = true;
        }
      } catch (err) {
        console.log(err);
      }
    });
  }

}
