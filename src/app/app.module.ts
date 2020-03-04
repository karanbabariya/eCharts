import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { Graphics2Component } from './graphics2/graphics2.component';
import { fetchDataService } from './fetchData.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    Graphics1Component,
    Graphics2Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule,
    HttpClientModule
  ],
  providers: [fetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
