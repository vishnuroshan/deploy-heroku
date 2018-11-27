import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { MarketComponent } from './market/market.component';
import { ToolsComponent } from './tools/tools.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'market',
    component: MarketComponent
  },
  {
    path: 'tools',
    component: ToolsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    MarketComponent,
    ToolsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
