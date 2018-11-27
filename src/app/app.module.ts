import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { ToolsComponent } from './tools/tools.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'git',
    component: ToolsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
    });
  }
}
