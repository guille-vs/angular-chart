import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';
import { text } from './config/config';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

//   constructor(private http: HttpClient) {
//     Chart.register(...registerables)
//   }
name= text

  ngOnInit() {
    // this.loadChartData();
  }

//   loadChartData() {
//     this.http.get<any[]>('/assets/audcad_td.json').subscribe(data => {
//       const barData = [];
//       const lineData = [];

//       for (let i = 0; i < data.length; i++) {
//         const item = data[i];
//         const date = new Date(item.date);

//         barData.push({
//           x: date.valueOf(),
//           o: item.open,
//           h: item.high,
//           l: item.low,
//           c: item.close
//         });

//         lineData.push({ x: date.valueOf(), y: item.close });
//       }

//       this.renderChart(barData, lineData);
//     });
//   }

//   renderChart(barData: any[], lineData: any[]) {
//     const chartConfig: ChartConfiguration<'candlestick'> = {
//       type: 'candlestick',
//       data: {
//         datasets: [{
//           label: 'CHRT - Chart.js Corporation',
//           data: barData,
//         }, {
//           label: 'Close price',
//           type: 'line',
//           data: lineData,
//           hidden: true,
//         }]
//       }
//     };

//     new Chart('barChart', chartConfig);
//   }

}
