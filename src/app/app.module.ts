import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { ErrorModule } from './error/error.module';
import { HomeModule } from './home/home.module';
import { PipesModule } from './pipes/pipes.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    ErrorModule,
    HomeModule,
    PipesModule,
    AppRoutingModule,
    BrowserModule,
    MatExpansionModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    PdfViewerModule,
    DashboardModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
