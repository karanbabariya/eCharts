import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EChartOption } from 'echarts';
import { fetchDataService } from './../fetchData.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-graphics2',
  templateUrl: './graphics2.component.html',
  styleUrls: ['./graphics2.component.css']
})
export class Graphics2Component implements OnInit {

	dateMessage: string;
  response: [];
  chartOption: EChartOption;

	constructor(private fetchData: fetchDataService) {
  }

  ngOnInit() {
    //Fetch Data from the server and decorate chartOption to generate the graphic2
    this.fetchData.usEmployment()
    .subscribe((response: any) => {
      this.response = response;

      let years = response.map(res => res.year.toString());
      let population = response.map(res => res.population);
      let emp_total = response.map(res => res.employed_total);
      let unemployed = response.map(res => res.unemployed);

      this.chartOption = {
        title: {
          left: '370px',
          text: 'US population, total employement and unemployment since 1940'
        },
        tooltip: {
           trigger: 'axis',
           axisPointer: {
             type: 'cross',
             show: true
           },
           formatter: function (params) {
              return 'Population: ' + params[2]['value'] + '<br/>Employed Total: ' + params[1]['value'] +
                '<br/>  Unemployed: ' + params[0]['value'];
           }
        },
        legend: {
            data: ['population', 'employed_total', 'unemployed'],
            formatter: function (name) {
                name = (name == 'population' ? 'Population' : (
                  name == 'employed_total' ? 'Employed Total': 'Unemployed'))
                return name;
            },
            top: '25'
        },
        xAxis: {
           type: 'category',
           name: 'year',
           nameGap: 25,
           nameLocation: 'center',
           axisLabel: {
              interval: 9
           },
           data: years
         },
         yAxis: {
           nameGap: 25,
           nameLocation: 'center',
           type: 'value'
         },
         series: [{
           name: 'unemployed',
           data: unemployed,
           showSymbol: false,
           type: 'line'
         }, {
           name: 'employed_total',
           data: emp_total,
           showSymbol: false,
           type: 'line'
         }, {
           name: 'population',
           data: population,
           showSymbol: false,
           type: 'line'
         }]
      }
    })
  }
}