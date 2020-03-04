import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EChartOption } from 'echarts';
import { fetchDataService } from './../fetchData.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-graphics1',
  templateUrl: './graphics1.component.html',
  styleUrls: ['./graphics1.component.css']
})
export class Graphics1Component implements OnInit {

	dateMessage: string;
  response: [];
  chartOption: EChartOption;

  constructor(private fetchData: fetchDataService) {
  }

  ngOnInit() {
    //Fetch Data from the server and decorate chartOption to generate the graphic1
    this.fetchData.usEmployment()
    .subscribe((response: any) => {
      this.response = response;

      let years = response.map(res => res.year.toString());
      let unemployed_percent = response.map(res => res.unemployed_percent);
      
      this.chartOption = {
        title: {
          left: '500px',
          text: 'US unemployement rate since 1940'
        },
        tooltip: {
           trigger: 'axis',
           axisPointer: {
             animation: true,
             type: 'cross'
           },
           formatter: function (params) {
                  params = params[0];
                  return params['value'];
              }
         },
         xAxis: {
           type: 'category',
           name: 'year',
           nameGap: 25,
           nameLocation: 'center',
           axisLabel: {
             interval: 9
           },
           splitLine: {
             show: true
           },
           axisLine: {
               onZero: false
           },
           data: years
         },
         yAxis: {
           name: 'unemployed_percent',
           nameGap: 25,
           axisPointer: {
             show: false
           },
           nameLocation: 'center',
           type: 'value'
         },
         series: [{
           data: unemployed_percent,
           showSymbol: false,
           hoverAnimation: true,
           type: 'line'
         }]
      }
    })
  }  
}