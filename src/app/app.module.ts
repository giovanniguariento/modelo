import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './pages/graph/graph.component';
import { HighchartsComponent } from './pages/highcharts/highcharts.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    HighchartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
