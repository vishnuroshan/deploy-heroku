import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';


@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  public data;
  public username: string;
  constructor(private github: GithubService) {
  }

  ngOnInit() {
  }

  getData() {
    console.log(this.username);
    this.github.getRepos(this.username, '1', 'discription').subscribe(data => {
      this.data = data;
    });
  }
}
