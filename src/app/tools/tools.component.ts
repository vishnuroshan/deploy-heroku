import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  constructor(private github: GithubService) {
    github.getRepos('vishnuroshan', '1', 'discription').subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
