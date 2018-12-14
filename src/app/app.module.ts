import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { InterceptorService } from './interceptor.service';
import { HeaderPipe } from './header.pipe';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeformatPipe } from './typeformat.pipe';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', component: ErrorComponent },
  { path: 'app/:id', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderPipe,
    TypeformatPipe,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    PdfViewerModule,
    DashboardModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
