import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {  
   highcharts = Highcharts;

   styleGraph : any = "line";
   

   chartOptions: Highcharts.Options = {
     title: {
       text: "Test bar"
     },
     xAxis: {
       categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
     },
     yAxis: {
       title: {
         text: "Infosys Stock value in dollar"
       }
     },
     series: [{
      type: 'bar',
      name: 'Year 1800',
      data: [107, 31, 635, 203, 2]
    }, {
      type: 'bar',
      name: 'Year 1900',
      data: [133, 156, 947, 408, 6]
    }, {
      type: 'bar',
      name: 'Year 2000',
      data: [814, 841, 3714, 727, 31]
    }, {
      type: 'bar',
      name: 'Year 2026',
      data: [1216, 1001, 4436, 738, 40]
    }]
   }

   highcharts2 = Highcharts;

   chartOptions2: Highcharts.Options = {
     title: {
       text: "Test line"
     },
     xAxis: {
       categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
     },
     yAxis: {
       title: {
         text: "Infosys Stock value in dollar"
       }
     },
     series: [{
      type: 'line',
      name: 'Year 1800',
      data: [107, 31, 635, 203, 2]
    }, {
      type: 'line',
      name: 'Year 1900',
      data: [133, 156, 947, 408, 6]
    }, {
      type: 'line',
      name: 'Year 2000',
      data: [814, 841, 3714, 727, 31]
    }, {
      type: 'line',
      name: 'Year 2026',
      data: [1216, 1001, 4436, 738, 40]
    }]
   }

   highcharts3 = Highcharts;

   chartOptions3: Highcharts.Options = {
     title: {
       text: "Test pizza"
     },
     series: [{
      name: 'Brands',
      colorByPoint: true,
      type: 'pie',
      data: [{
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true
      }, {
        name: 'Internet Explorer',
        y: 11.84
      }, {
        name: 'Firefox',
        y: 10.85
      }, {
        name: 'Edge',
        y: 4.67
      }, {
        name: 'Safari',
        y: 4.18
      }, {
        name: 'Sogou Explorer',
        y: 1.64
      }, {
        name: 'Opera',
        y: 1.6
      }, {
        name: 'QQ',
        y: 1.2
      }, {
        name: 'Other',
        y: 2.61
      }]
    }]
   }

   public teste(styleG : any){

      this.styleGraph = styleG
      
   }
 }

 